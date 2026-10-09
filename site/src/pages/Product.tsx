import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { findCategory, findProduct, productsIn, ui } from "../content";
import { useI18n } from "../i18n";
import { usePageMeta } from "../meta";
import { NotFound } from "./NotFound";

export function Product() {
  const { slug } = useParams();
  const product = findProduct(slug ?? "");
  const { t } = useI18n();
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
  }, [slug]);

  usePageMeta(
    product ? `${product.name} — Aerly` : "Aerly",
    product ? t(product.summary) : "",
  );

  if (!product) return <NotFound />;

  const image = product.images[Math.min(active, product.images.length - 1)];
  const category = findCategory(product.category);
  const related = productsIn(product.category).filter((item) => item.slug !== product.slug);

  return (
    <div className="wrap">
      <div className="product-layout" style={{ paddingTop: "1.6rem" }}>
        <div>
          <div className="gallery-main">
            <img src={image.src} alt={t(image.alt)} />
          </div>
          {product.images.length > 1 ? (
            <div className="thumbs" role="group" aria-label={t(ui.view)}>
              {product.images.map((picture, index) => (
                <button
                  key={picture.src}
                  type="button"
                  aria-pressed={index === active}
                  onClick={() => setActive(index)}
                >
                  <img src={picture.src} alt="" />
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div className="buy">
          <p className="crumbs">
            <Link to="/">{t(ui.home)}</Link>
            {" / "}
            <Link to={`/${product.category}`}>
              {category ? t(category.title) : t(ui.range)}
            </Link>
          </p>
          <h1>{product.name}</h1>
          <p className="lede">{t(product.summary)}</p>
          <h2 className="serif" style={{ fontSize: "1.4rem", marginTop: "1.4rem" }}>
            {t(ui.highlights)}
          </h2>
          <ul className="highlights">
            {product.highlights.map((item) => (
              <li key={item.en}>{t(item)}</li>
            ))}
          </ul>
          <div className="hero-actions">
            <Link className="btn" to={`/contact?interest=${product.slug}`}>
              {t(ui.inquire)}
            </Link>
            <Link className="btn btn-ghost" to={`/${product.category}`}>
              {t(ui.backRange)}
            </Link>
          </div>
        </div>
      </div>

      <section className="section story">
        <p>{t(product.story)}</p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>{t(ui.specifications)}</h2>
        </div>
        <table className="spec-table">
          <tbody>
            {product.specs.map((spec) => (
              <tr key={spec.label.en}>
                <th scope="row">{t(spec.label)}</th>
                <td>{t(spec.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="fine">{t(ui.specNote)}</p>
      </section>

      {related.length > 0 ? (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-head">
            <h2>{t(ui.related)}</h2>
          </div>
          <div className="product-grid">
            {related.map((item) => (
              <Link className="product-card" to={`/product/${item.slug}`} key={item.slug}>
                <img src={item.images[0].src} alt={t(item.images[0].alt)} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{t(item.tagline)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
