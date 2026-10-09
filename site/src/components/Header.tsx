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
        <strong>{brand.name}</strong>
        <span>{t(brand.tagline)}</span>
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
          <strong className="serif">{brand.name}</strong>
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
