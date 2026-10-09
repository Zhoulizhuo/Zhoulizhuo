import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { brand, interests, ui, type InterestId } from "../content";
import { useI18n } from "../i18n";
import { usePageMeta } from "../meta";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function isInterest(value: string | null): value is InterestId {
  return interests.some((item) => item.id === value);
}

export function Contact() {
  const { t } = useI18n();
  const [params] = useSearchParams();
  const preset = params.get("interest");
  const [interest, setInterest] = useState<InterestId>(isInterest(preset) ? preset : "cabin-one");
  const [errors, setErrors] = useState<Errors>({});
  const [draft, setDraft] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isInterest(preset)) setInterest(preset);
  }, [preset]);

  usePageMeta(t({ en: "Contact — Aerly", zh: "联系 — 艾黎" }), t(ui.contactLede));

  const interestLabel = useMemo(
    () => interests.find((item) => item.id === interest)?.label ?? interests[0].label,
    [interest],
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const country = String(data.get("country") ?? "").trim();
    const quantity = String(data.get("quantity") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: Errors = {};
    if (!name) next.name = t(ui.form.errors.name);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = t(ui.form.errors.email);
    if (!message) next.message = t(ui.form.errors.message);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setDraft("");
      return;
    }

    const body = [
      `${t(ui.form.name)}: ${name}`,
      `${t(ui.form.email)}: ${email}`,
      company ? `${t(ui.form.company)}: ${company}` : "",
      country ? `${t(ui.form.country)}: ${country}` : "",
      `${t(ui.form.interest)}: ${t(interestLabel)}`,
      quantity ? `${t(ui.form.quantity)}: ${quantity}` : "",
      "",
      message,
    ]
      .filter((line, index, all) => line !== "" || all[index - 1] !== "")
      .join("\n");

    const subject = `Aerly inquiry — ${t(interestLabel)}`;
    const mailto = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraft(`To: ${brand.email}\nSubject: ${subject}\n\n${body}`);
    setCopied(false);
    window.location.href = mailto;
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="wrap">
      <header className="page-head">
        <p className="kicker">{brand.email}</p>
        <h1>{t(ui.contactTitle)}</h1>
        <p className="lede">{t(ui.contactLede)}</p>
      </header>
      <section className="section">
        <form className="form" onSubmit={onSubmit} noValidate>
          <label>
            {t(ui.form.name)}
            <input name="name" autoComplete="name" required />
            {errors.name ? <span className="field-error">{errors.name}</span> : null}
          </label>
          <label>
            {t(ui.form.email)}
            <input name="email" type="email" autoComplete="email" required />
            {errors.email ? <span className="field-error">{errors.email}</span> : null}
          </label>
          <label>
            {t(ui.form.company)} ({t(ui.form.optional)})
            <input name="company" autoComplete="organization" />
          </label>
          <label>
            {t(ui.form.country)} ({t(ui.form.optional)})
            <input name="country" autoComplete="country-name" />
          </label>
          <label>
            {t(ui.form.interest)}
            <select name="interest" value={interest} onChange={(event) => setInterest(event.target.value as InterestId)}>
              {interests.map((item) => (
                <option key={item.id} value={item.id}>
                  {t(item.label)}
                </option>
              ))}
            </select>
          </label>
          <label>
            {t(ui.form.quantity)} ({t(ui.form.optional)})
            <input name="quantity" placeholder={t(ui.form.placeholders.quantity)} />
          </label>
          <label>
            {t(ui.form.message)}
            <textarea name="message" required placeholder={t(ui.form.placeholders.message)} />
            {errors.message ? <span className="field-error">{errors.message}</span> : null}
          </label>
          <div>
            <button className="btn" type="submit">
              {t(ui.form.submit)}
            </button>
            <p className="fine">{t(ui.form.note)}</p>
          </div>
        </form>
        {draft ? (
          <div className="draft" style={{ marginTop: "1.2rem" }}>
            <strong>{t(ui.form.draft)}</strong>
            <pre>{draft}</pre>
            <button className="btn btn-ghost" type="button" onClick={copyDraft}>
              {copied ? t(ui.form.copied) : t(ui.form.copy)}
            </button>
          </div>
        ) : null}
      </section>
    </div>
  );
}
