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

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  usePageMeta(
    t({ en: `Contact — ${brand.name}`, zh: `联系 — ${brand.nameZh}` }),
    t(ui.contactLede),
  );

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

    const subject = `${brand.name} Inquiry — ${t(interestLabel)} (${name})`;
    const mailto = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraft(`To: ${brand.email}\nSubject: ${subject}\n\n${body}`);
    setCopied(false);

    if (brand.formspreeEndpoint) {
      setSubmitting(true);
      fetch(brand.formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          country,
          interest: t(interestLabel),
          quantity,
          message,
          _subject: subject,
        }),
      })
        .then((res) => {
          if (res.ok) {
            setSubmitted(true);
          } else {
            window.location.href = mailto;
          }
        })
        .catch(() => {
          window.location.href = mailto;
        })
        .finally(() => setSubmitting(false));
    } else {
      window.location.href = mailto;
    }
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
        <div className="contact-direct-card">
          <p className="kicker">Direct Contact · 直接联络</p>
          <div className="contact-methods">
            <a href={`mailto:${brand.email}`} className="contact-method-item">
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </span>
              <div>
                <strong>Email</strong>
                <span>{brand.email}</span>
              </div>
            </a>
            <a href={`tel:${brand.phone}`} className="contact-method-item">
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </span>
              <div>
                <strong>Phone / WeChat / WhatsApp</strong>
                <span>{brand.phoneDisplay}</span>
              </div>
            </a>
          </div>
        </div>

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
            <button className="btn" type="submit" disabled={submitting}>
              {submitting ? t(ui.form.submitting) : t(ui.form.submit)}
            </button>
            <p className="fine">{t(ui.form.note)}</p>
          </div>
        </form>

        {submitted ? (
          <div className="band" style={{ marginTop: "1.5rem", background: "var(--sage-deep)" }}>
            <h3 style={{ margin: "0 0 0.5rem" }}>✓ {t(ui.form.successTitle)}</h3>
            <p className="fine" style={{ color: "var(--paper)", margin: 0 }}>
              {brand.email} · {brand.phoneDisplay}
            </p>
          </div>
        ) : null}

        {draft ? (
          <div className="draft" style={{ marginTop: "1.2rem" }}>
            <strong>{t(ui.form.draft)}</strong>
            <pre>{draft}</pre>
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", alignItems: "center" }}>
              <button className="btn btn-ghost" type="button" onClick={copyDraft}>
                {copied ? t(ui.form.copied) : t(ui.form.copy)}
              </button>
              <a
                className="btn btn-ghost"
                href={`mailto:${brand.email}?subject=${encodeURIComponent(`${brand.name} Inquiry — ${t(interestLabel)}`)}&body=${encodeURIComponent(draft.split("\n\n").slice(1).join("\n\n"))}`}
              >
                {t(ui.form.openMailDraft)}
              </a>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}
