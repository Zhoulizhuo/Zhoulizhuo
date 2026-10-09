import { Link } from "react-router-dom";
import { brand, categories, choices, materials, ui } from "../content";
import { useI18n } from "../i18n";
import { usePageMeta } from "../meta";

export function Home() {
  const { t } = useI18n();
  usePageMeta(
    `${t({ en: `${brand.name} — cabin-ready children's mobility`, zh: `${brand.nameZh} — 登机尺寸的儿童出行` })}`,
    t(ui.heroLede),
  );

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="kicker">{t(ui.heroKicker)}</p>
          <h1>
            {t(ui.heroTitle).split("\n").map((line) => (
              <span className="hero-line" key={line}>
                {line}
              </span>
            ))}
          </h1>
          <p className="lede">{t(ui.heroLede)}</p>
          <div className="hero-actions">
            <Link className="btn" to="/product/cabin-one">
              {t(ui.heroPrimary)}
            </Link>
            <Link className="btn btn-ghost" to="/partnership">
              {t(ui.heroSecondary)}
            </Link>
          </div>
        </div>
        <figure className="hero-media">
          <img src="/images/hero-airport.jpg" alt={t(ui.heroCaption)} />
          <figcaption>{t(ui.heroCaption)}</figcaption>
        </figure>
      </section>

      <div className="wrap">
        <div className="fact-strip">
          {ui.facts.map((fact) => (
            <p key={fact.en}>{t(fact)}</p>
          ))}
        </div>

        <section className="section">
          <div className="section-head">
            <p className="kicker">01 — 03</p>
            <h2>{t(ui.range)}</h2>
            <p className="lede">{t(ui.rangeLede)}</p>
          </div>
          <ol className="range-list">
            {categories.map((category) => (
              <li key={category.id}>
                <Link className="range-row" to={category.path}>
                  <span className="range-index">{category.index}</span>
                  <div className="range-copy">
                    <h3>{t(category.title)}</h3>
                    <p>{t(category.lede)}</p>
                  </div>
                  <img src={category.image} alt={t(category.imageAlt)} />
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section className="section feature">
          <div className="feature-photos">
            <img src="/images/cabin-open.jpg" alt={t(categories[0].imageAlt)} />
            <img
              src="/images/cabin-folded.jpg"
              alt={t({
                en: "Cabin One folded beside a suitcase",
                zh: "折叠后的 Cabin One，旁边是行李箱",
              })}
            />
          </div>
          <div className="feature-copy">
            <p className="kicker">Cabin One</p>
            <h2>{t({ en: "The fold, next to the bag.", zh: "折叠之后，放在箱子旁边。" })}</h2>
            <p className="lede">
              {t({
                en: "Self-standing. One hand. Aluminum. The suitcase in the picture is there so the package has a scale, not a promise that every airline will take it.",
                zh: "能自己站稳。一只手。铝合金。图里的箱子是用来对照体积的，不是承诺每一家航司都会收下。",
              })}
            </p>
            <div className="hero-actions">
              <Link className="btn" to="/product/cabin-one">
                {t(ui.view)} Cabin One
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>{t(ui.which)}</h2>
          </div>
          <div className="choice-grid">
            {choices.map((choice) => (
              <article className="choice" key={choice.href}>
                <h3>{t(choice.title)}</h3>
                <p>{t(choice.body)}</p>
                <p>
                  <Link to={choice.href}>{t(ui.view)}</Link>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section materials">
          <img
            src="/images/materials.jpg"
            alt={t({
              en: "Aluminum tube, sage fabric, a wheel, and a leather strap",
              zh: "铝管、鼠尾草绿面料、一只轮子和一条皮带",
            })}
          />
          <div>
            <div className="section-head">
              <h2>{t(ui.materialsTitle)}</h2>
              <p className="lede">{t(ui.materialsLede)}</p>
            </div>
            <div className="material-notes">
              {materials.map((item) => (
                <article className="note-card" key={item.title.en}>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.body)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="band">
            <p className="kicker">{t(ui.partnership)}</p>
            <h2>{t(ui.partnerTitle)}</h2>
            <p className="lede">{t(ui.partnerLede)}</p>
            <p>
              <Link className="btn btn-light" to="/partnership">
                {t(ui.partnerLink)}
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
