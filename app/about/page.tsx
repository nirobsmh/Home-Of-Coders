import Image from "next/image";
import SiteFooter from "../../components/SiteFooter";

const foundersTeam = [
  {
    name: "Nirob",
    role: "Founder & Lead Engineer",
    title: "Full-Stack Software Engineer",
    description:
      "Experienced in owning products end-to-end, from MVP to scale. I design and build AI-powered systems that prioritize performance, reliability, and measurable business impact.",
    skills: [
      "React & Next.js",
      "Node.js APIs",
      "Real-time Systems",
      "AI Product Strategy",
    ],
    image: "/images/nirob.jpg",
    width: 560,
    height: 640,
    imagePosition: "right",
    linkedin: "https://www.linkedin.com/in/nirobsmh/",
  },
  {
    name: "Saha Anirudha Arnob",
    role: "Founder & Head of Sales",
    title: "Head of Sales",
    description:
      "Founder and Head of Sales focused on growth partnerships and revenue strategy. 3+ years of experience with Automation and Engineering.",
    skills: [],
    image: "/images/arnob.png",
    width: 2048,
    height: 1365,
    imagePosition: "left",
    linkedin: "https://www.linkedin.com/in/saha-anirudha-arnob-a33615371/",
  },
  {
    name: "Iftakhar Khan Efaz",
    role: "Founder & Head of Operations",
    title: "Automation Engineer",
    description:
      "Founder and Head of Operations, Automation Engineer. 3+ years of experience with Automation and Engineering.",
    skills: [],
    image: "/images/efaz.png",
    width: 828,
    height: 828,
    imagePosition: "right",
    linkedin: "https://www.linkedin.com/in/iftakharkhanefaz/",
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="noise-layer" />
      <header className="about-hero">
        <nav className="navbar navbar-expand-lg navbar-dark py-4">
          <div className="container-fluid px-lg-5">
            <a
              className="navbar-brand d-flex align-items-center gap-2"
              href="/"
            >
              <span className="brand-icon">
                <img src="/images/logo.png" alt="Home Of Coders logo" />
              </span>
              <span className="brand-text">Home Of Coders</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#aboutNav"
              aria-controls="aboutNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="aboutNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i
                      className="fa-solid fa-house nav-icon"
                      aria-hidden="true"
                    />
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services">
                    <i
                      className="fa-solid fa-briefcase nav-icon"
                      aria-hidden="true"
                    />
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#work">
                    <i
                      className="fa-solid fa-diagram-project nav-icon"
                      aria-hidden="true"
                    />
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    <i
                      className="fa-solid fa-envelope nav-icon"
                      aria-hidden="true"
                    />
                    Contact us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/about">
                    <i
                      className="fa-solid fa-user-group nav-icon"
                      aria-hidden="true"
                    />
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

        <div className="container-fluid px-lg-5 about-hero-content">
          <div className="row align-items-center">
            <div className="col-lg-9 col-xl-8">
              <span className="about-eyebrow">
                <i className="fa-solid fa-people-group" aria-hidden="true" />
                About us
              </span>
              <h1 className="display-3 fw-bold">
                The People Behind Home Of Coders
              </h1>
              <p className="lead">
                We are a boutique engineering studio focused on high-impact,
                AI-powered products. Our approach is rooted in ownership,
                craftsmanship, and building systems that scale sustainably.
              </p>
              <div className="about-highlight">
                <div>
                  <h3>AI-first delivery</h3>
                  <p>
                    Rapid prototypes, smart automation, and production-ready
                    architecture.
                  </p>
                </div>
                <div>
                  <h3>Product ownership</h3>
                  <p>
                    From MVPs to global launches, we stay with you through every
                    iteration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="about-founders-stack">
        <div className="container-fluid px-lg-5">
          <div className="section-heading text-center about-team-heading">
            <h2>Founders team</h2>
          </div>
          <div className="founders-stack">
            {foundersTeam.map((founder) => (
              <div
                className={`founder-row ${
                  founder.imagePosition === "left" ? "image-left" : ""
                }`.trim()}
                key={founder.name}
              >
                {founder.imagePosition === "left" && (
                  <div className="about-founder-image">
                    <Image
                      src={founder.image}
                      alt={`Portrait of ${founder.name}`}
                      width={founder.width}
                      height={founder.height}
                    />
                  </div>
                )}
                <div className="about-founder-card">
                  <span className="about-role">{founder.role}</span>
                  <h2>{founder.name}</h2>
                  <h3>{founder.title}</h3>
                  <p>{founder.description}</p>
                  {founder.skills.length > 0 && (
                    <div className="about-skill-grid">
                      {founder.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  )}
                  <a
                    className="btn btn-outline-light about-link-btn"
                    href={founder.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fa-brands fa-linkedin-in"
                      aria-hidden="true"
                    />
                    View LinkedIn
                  </a>
                </div>
                {founder.imagePosition === "right" && (
                  <div className="about-founder-image">
                    <Image
                      src={founder.image}
                      alt={`Portrait of ${founder.name}`}
                      width={founder.width}
                      height={founder.height}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-mission-section">
        <div className="container-fluid px-lg-5">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-panel about-panel-dark">
                <h2>Vision</h2>
                <p>
                  Build a globally trusted engineering partner that helps teams
                  innovate, scale, and lead through intelligent digital systems.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-panel about-panel-light">
                <h2>Mission</h2>
                <p>
                  Design, develop, and deliver modern software that solves real
                  business challenges through transparency, technical
                  excellence, and measurable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
