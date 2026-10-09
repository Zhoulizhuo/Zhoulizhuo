import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { brand, categories, ui } from "../content";
import { useI18n } from "../i18n";

const links = [
  ...categories.map((category) => ({ to: category.path, label: category.nav })),
  { to: "/partnership", label: ui.partnership },
  { to: "/about", label: ui.about },
];

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const location = useLocation();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    dialogRef.current?.close();
    setMenuOpen(false);
  }, [location.pathname]);

  function openMenu() {
    dialogRef.current?.showModal();
    setMenuOpen(true);
  }

  function closeMenu() {
    dialogRef.current?.close();
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="skip" href="#content">
        {t(ui.skip)}
      </a>
      <NavLink to="/" className="logo" end>
        <span className="logo-brand">
          <svg className="logo-mark" viewBox="0 0 32 32" aria-hidden="true">
            <circle cx="16" cy="16" r="14.5" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.25" />
            <circle cx="16" cy="16" r="5" fill="currentColor" />
            <path d="M16 2.5v4M16 25.5v4M2.5 16h4M25.5 16h4M6.5 6.5l3 3M22.5 22.5l3 3M6.5 25.5l3-3M22.5 9.5l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <strong>{brand.name}</strong>
          <span className="logo-sub">{locale === "zh" ? brand.nameZh : "KIDS MOBILITY"}</span>
        </span>
        <span className="logo-tagline">{t(brand.tagline)}</span>
      </NavLink>
      <nav className="desktop-nav" aria-label={t(ui.menu)}>
        {links.map((link) => (
          <NavLink key={link.to} to={link.to}>
            {t(link.label)}
          </NavLink>
        ))}
      </nav>
      <div className="header-actions">
        <div className="lang" role="group" aria-label={t(ui.language)}>
          <button type="button" aria-pressed={locale === "en"} onClick={() => setLocale("en")}>
            EN
          </button>
          <button type="button" aria-pressed={locale === "zh"} onClick={() => setLocale("zh")}>
            中文
          </button>
        </div>
        <NavLink to="/contact" className="btn header-inquire">
          {t(ui.inquire)}
        </NavLink>
        <button type="button" className="menu-button" aria-expanded={menuOpen} onClick={openMenu}>
          {t(ui.menu)}
        </button>
      </div>
      <dialog ref={dialogRef} className="nav-dialog" onClose={() => setMenuOpen(false)}>
        <div className="nav-dialog-bar">
          <span className="serif" style={{ fontSize: "1.8rem" }}>{brand.name}</span>
          <span style={{ fontSize: "0.95rem", color: "var(--muted)", marginLeft: "0.4rem" }}>{brand.nameZh}</span>
          <button type="button" className="menu-button" onClick={closeMenu}>
            {t(ui.close)}
          </button>
        </div>
        <nav>
          <NavLink to="/" end onClick={closeMenu}>
            {t(ui.home)}
          </NavLink>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={closeMenu}>
              {t(link.label)}
            </NavLink>
          ))}
          <NavLink to="/contact" onClick={closeMenu}>
            {t(ui.contact)}
          </NavLink>
        </nav>
      </dialog>
    </header>
  );
}
