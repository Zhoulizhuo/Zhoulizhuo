import { Link } from "react-router-dom";
import { brand, categories, ui } from "../content";
import { useI18n } from "../i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <div className="logo-brand" style={{ marginBottom: "0.4rem" }}>
            <svg className="logo-mark" viewBox="0 0 32 32" aria-hidden="true" style={{ width: "1.8rem", height: "1.8rem" }}>
              <circle cx="16" cy="16" r="14.5" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.25" />
              <circle cx="16" cy="16" r="5" fill="currentColor" />
              <path d="M16 2.5v4M16 25.5v4M2.5 16h4M25.5 16h4M6.5 6.5l3 3M22.5 22.5l3 3M6.5 25.5l3-3M22.5 9.5l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <strong style={{ fontSize: "1.6rem" }}>{brand.name}</strong>
            <span style={{ fontSize: "0.9rem", color: "var(--muted)", marginLeft: "0.4rem" }}>{brand.nameZh}</span>
          </div>
          <p>{t(brand.tagline)}</p>
          <p style={{ marginTop: "0.6rem" }}>
            <a href={`mailto:${brand.email}`} style={{ display: "block" }}>
              ✉ {brand.email}
            </a>
            <a href={`tel:${brand.phone}`} style={{ display: "block", marginTop: "0.2rem" }}>
              ✆ {brand.phoneDisplay}
            </a>
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
