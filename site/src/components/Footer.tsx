import { Link } from "react-router-dom";
import { brand, categories, ui } from "../content";
import { useI18n } from "../i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <strong>{brand.name}</strong>
          <p>{t(brand.tagline)}</p>
          <p>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
          </p>
        </div>
        <div>
          <p>{t(ui.range)}</p>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <Link to={category.path}>{t(category.title)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>{t(ui.about)}</p>
          <ul>
            <li>
              <Link to="/partnership">{t(ui.partnership)}</Link>
            </li>
            <li>
              <Link to="/about">{t(ui.about)}</Link>
            </li>
            <li>
              <Link to="/contact">{t(ui.contact)}</Link>
            </li>
          </ul>
        </div>
        <div>
          <p>{t(ui.photoNote)}</p>
        </div>
      </div>
    </footer>
  );
}
