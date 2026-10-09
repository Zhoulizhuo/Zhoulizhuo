import { Link } from "react-router-dom";
import { brand, ui } from "../content";
import { useI18n } from "../i18n";
import { usePageMeta } from "../meta";

export function NotFound() {
  const { t } = useI18n();
  usePageMeta(brand.name, t(ui.notFound));
  return (
    <div className="wrap">
      <header className="page-head">
        <h1>{t(ui.notFound)}</h1>
        <p>
          <Link className="btn" to="/">
            {t(ui.notFoundLink)}
          </Link>
        </p>
      </header>
    </div>
  );
}
