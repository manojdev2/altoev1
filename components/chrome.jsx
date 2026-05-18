/* NAV + FOOTER + THEME */

function Nav({ theme, onToggleTheme }) {
  return (
    <nav className="nav">
      <a href="#" className="nav__logo">
       <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 , width:80}}>
                <img src="uploads/Alto.ev.png"></img>
              </span>
      </a>
      <div className="nav__links">
        <a className="nav__link" href="#stories">Stories</a>
        <a className="nav__link" href="#companion">Alto AI</a>
        <a className="nav__link" href="#network">Network</a>
        <a className="nav__link" href="#ecosystem">Ecosystem</a>
        <a className="nav__link" href="#future">Future</a>
      </div>
      <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
        {theme === "dark" ? <Icon.Sun/> : <Icon.Moon/>}
      </button>
      <button className="nav__cta">Reserve</button>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <img src="uploads/Alto.ev.png"></img>
              </span>
            </div>
            <p className="footer__tagline">
              The intelligent mobility companion for everyday electric life. Built in India. Shipping worldwide, summer 2026.
            </p>
          </div>
          {[
            { title: "COMPANY", items: ["Manifesto", "Press", "Careers", "Sustainability"] },
            { title: "SUPPORT", items: ["Help Center", "Reserve", "Contact", "Status"] },
            { title: "LEGAL", items: ["Privacy", "Terms", "Energy Data"] },
          ].map((c, i) => (
            <div className="footer__col" key={i}>
              <div className="footer__col-title">{c.title}</div>
              <ul>{c.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <span>© 2026 ALTO.EV BY KROSSARK</span>
            </div>
      </div>
    </footer>
  );
}

window.Nav = Nav;
window.Footer = Footer;
