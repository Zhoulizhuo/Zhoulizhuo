import { Link } from "react-router-dom";
import { brand, steps, ui } from "../content";
import { useI18n } from "../i18n";
import { usePageMeta } from "../meta";

export function Partnership() {
  const { t } = useI18n();
  usePageMeta(
    t({ en: `Partnership — ${brand.name}`, zh: `合作 — ${brand.nameZh}` }),
    t(ui.partnerPageLede),
  );

  return (
    <div className="wrap">
      <header className="page-head">
        <p className="kicker">{t(ui.partnership)}</p>
        <h1>{t(ui.partnerTitle)}</h1>
        <p className="lede">{t(ui.partnerPageLede)}</p>
      </header>
      <section className="section">
        <div className="step-grid four">
          {steps.map((step) => (
            <article className="step" key={step.index}>
              <span>{step.index}</span>
              <h3>{t(step.title)}</h3>
              <p>{t(step.body)}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="band">
          <h2>{t({ en: "What we will not invent.", zh: "我们不会编这些。" })}</h2>
          <p className="lede">
            {t({
              en: "A minimum order, a lead time, or a test mark, before we know the model and the country. Ask, and we answer against the actual file.",
              zh: "在型号和国家还不清楚时，不起订量、不写交期、不贴检测标志。你问，我们按实际文件回答。",
            })}
          </p>
          <p>
            <Link className="btn btn-light" to="/contact?interest=oem">
              {t(ui.inquire)}
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
