import { Link, useLocation } from "react-router-dom";
import {
  balanceCompare,
  brand,
  findCategory,
  productsIn,
  travelCompare,
  ui,
  type Copy,
} from "../content";
import { useI18n } from "../i18n";
import { usePageMeta } from "../meta";
import { NotFound } from "./NotFound";

function CompareTable({
  title,
  headers,
  rows,
}: {
  title: string;
  headers: string[];
  rows: { label: Copy; values: Copy[] }[];
}) {
  const { t } = useI18n();
  return (
    <section className="section">
      <div className="section-head">
        <h2>{title}</h2>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="compare">
          <thead>
            <tr>
              <th />
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label.en}>
                <th scope="row">{t(row.label)}</th>
                {row.values.map((value, index) => (
                  <td key={headers[index]}>{t(value)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="fine">{t(ui.specNote)}</p>
    </section>
  );
}

export function Category() {
  const { pathname } = useLocation();
  const category = findCategory(pathname.replace(/^\//, ""));
  const { t } = useI18n();

  usePageMeta(
    category ? `${t(category.title)} — ${brand.name}` : brand.name,
    category ? t(category.lede) : "",
  );

  if (!category) return <NotFound />;

  const list = productsIn(category.id);

  return (
    <div className="wrap">
      <header className="page-head">
        <p className="kicker">
          {category.index} — {t(ui.range)}
        </p>
        <h1>{t(category.title)}</h1>
        <p className="lede">{t(category.lede)}</p>
      </header>
      <section className="section product-grid">
        {list.map((product) => (
          <Link className="product-card" to={`/product/${product.slug}`} key={product.slug}>
            <img src={product.images[0].src} alt={t(product.images[0].alt)} />
            <div>
              <h3>{product.name}</h3>
              <p>{t(product.tagline)}</p>
            </div>
          </Link>
        ))}
      </section>
      {category.id === "travel" ? (
        <CompareTable title={t(ui.compare)} headers={travelCompare.headers} rows={travelCompare.rows} />
      ) : null}
      {category.id === "balance" ? (
        <CompareTable title={t(ui.compare)} headers={balanceCompare.headers} rows={balanceCompare.rows} />
      ) : null}
      <p className="fine">
        <Link to="/partnership">{t(ui.partnerLink)}</Link>
      </p>
    </div>
  );
}
