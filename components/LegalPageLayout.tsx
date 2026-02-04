import SiteFooter from "./SiteFooter";

type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type LegalPageLayoutProps = {
  title: string;
  updated: string;
  sections: LegalSection[];
};

export default function LegalPageLayout({ title, updated, sections }: LegalPageLayoutProps) {
  return (
    <div className="legal-page">
      <div className="noise-layer" />
      <header className="legal-hero">
        <nav className="navbar navbar-expand-lg navbar-dark py-4">
          <div className="container-fluid px-lg-5">
            <a className="navbar-brand d-flex align-items-center gap-2" href="/">
              <span className="brand-icon">
                <img src="/images/logo.png" alt="Home Of Coders logo" />
              </span>
              <span className="brand-text">Home Of Coders</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#legalNav"
              aria-controls="legalNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="legalNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="fa-solid fa-house nav-icon" aria-hidden="true" />
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services">
                    <i className="fa-solid fa-briefcase nav-icon" aria-hidden="true" />
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#work">
                    <i className="fa-solid fa-diagram-project nav-icon" aria-hidden="true" />
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    <i className="fa-solid fa-envelope nav-icon" aria-hidden="true" />
                    Contact us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    <i className="fa-solid fa-user-group nav-icon" aria-hidden="true" />
                    About us
                  </a>
                </li>
              </ul>
              <div className="nav-cta-group">
                <a
                  className="btn btn-glow"
                  href="https://cal.com/nirob/int-meeting"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="btn-icon" aria-hidden="true">
                    <i className="fa-solid fa-phone" />
                  </span>
                  Book a call
                </a>
                <a className="btn btn-outline-light" href="/contact">
                  Get quote
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="container-fluid px-lg-5 legal-hero-content">
          <h1>{title}</h1>
          <p className="legal-updated">Last Updated: {updated}</p>
        </div>
      </header>

      <section className="legal-body">
        <div className="container-fluid px-lg-5">
          <div className="legal-grid">
            <aside className="legal-toc">
              <h3>Table of Contents</h3>
              <ul>
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>
                      {index + 1}. {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="legal-content">
              {sections.map((section, index) => (
                <div key={section.id} id={section.id} className="legal-section">
                  <h2>
                    {index + 1}. {section.title}
                  </h2>
                  {section.paragraphs.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
