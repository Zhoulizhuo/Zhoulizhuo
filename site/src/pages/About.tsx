import { Link } from "react-router-dom";
import { brand, ui } from "../content";
import { useI18n } from "../i18n";
import { usePageMeta } from "../meta";

export function About() {
  const { t } = useI18n();
  usePageMeta(t({ en: "About — Aerly", zh: "关于 — 艾黎" }), t(ui.aboutBody[0]));

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
        <p>
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
        </p>
        <p>
          <Link className="btn" to="/contact">
            {t(ui.contact)}
          </Link>
        </p>
      </section>
    </div>
  );
}
