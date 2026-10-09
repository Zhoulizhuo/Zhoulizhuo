import { Link } from "react-router-dom";
import { brand, ui } from "../content";
import { useI18n } from "../i18n";
import { usePageMeta } from "../meta";

export function About() {
  const { t } = useI18n();
  usePageMeta(
    t({ en: `About — ${brand.name}`, zh: `关于 — ${brand.nameZh}` }),
    t(ui.aboutBody[0]),
  );

  return (
    <div className="wrap">
      <header className="page-head">
        <p className="kicker">
          {brand.name} · {brand.nameZh}
        </p>
        <h1>{t(ui.aboutTitle)}</h1>
      </header>
      <section className="section story">
        {ui.aboutBody.map((paragraph) => (
          <p key={paragraph.en}>{t(paragraph)}</p>
        ))}
        <p>{t(ui.photoNote)}</p>
        <p style={{ display: "grid", gap: "0.2rem", marginTop: "1rem" }}>
          <a href={`mailto:${brand.email}`}>✉ {brand.email}</a>
          <a href={`tel:${brand.phone}`}>✆ {brand.phoneDisplay}</a>
        </p>
        <p style={{ marginTop: "1.4rem" }}>
          <Link className="btn" to="/contact">
            {t(ui.contact)}
          </Link>
        </p>
      </section>
    </div>
  );
}
