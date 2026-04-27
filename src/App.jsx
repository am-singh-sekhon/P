import { useEffect, useRef, useState } from "react";

const profile = {
  name: "Priyal Panda",
  citizenship: "US Citizen",
  title: "Data Analyst",
  headline: "Turning data into dashboards, automation, and measurable action.",
  summary:
    "Data Analyst with over 4 years of experience driving automation, data visualization, and performance optimization across retail, health, legal, and education domains.",
  description:
    "Priyal blends analytics, BI reporting, and data engineering thinking to turn large datasets into faster reporting, clearer dashboards, and stronger business decisions.",
  email: "priyalpanda008@gmail.com",
  phone: "+1-716-247-7266",
  github: "https://github.com/priyalpanda",
  resume: "/resume.pdf",
};

const featuredSkills = [
  {
    title: "SQL + Python Analytics",
    subtitle:
      "Exploratory data analysis, segmentation, validation, and insight generation across business and customer datasets.",
    badge: "Core Stack",
  },
  {
    title: "Power BI Storytelling",
    subtitle:
      "Interactive dashboards for KPI tracking, performance reviews, executive reporting, and automated refresh workflows.",
    badge: "Featured",
  },
  {
    title: "Snowflake Data Pipelines",
    subtitle:
      "Scalable ETL and ML-ready data flows using Snowflake, DBT, and Apache Airflow for reliable analytics delivery.",
    badge: "Pipeline",
  },
  {
    title: "Forecasting + Experiments",
    subtitle:
      "Regression, time-series analysis, A/B testing, and model comparison to support data-backed product decisions.",
    badge: "Insight Lab",
  },
];

const stack = [
  "Python",
  "SQL",
  "Power BI",
  "Snowflake",
  "Tableau",
  "DBT",
  "Apache Airflow",
  "Excel",
  "AWS Cloud",
  "MySQL",
  "Oracle Database",
  "R",
];

const experience = [
  {
    company: "Meta",
    role: "Data Analyst",
    period: "Aug 2025 - Jan 2026",
    highlights: [
      "Analyzed 10M+ rows of advertiser and product data using statistical analysis, regression, and forecasting models.",
      "Cleaned 1,000+ robot interaction records and improved dataset reliability by identifying data quality issues.",
      "Ran A/B testing across robot model experiments and reduced manual evaluation effort by about 40%.",
      "Built Power BI reporting across 15+ performance KPIs for clearer model comparison and experiment tracking.",
    ],
  },
  {
    company: "Rupp Pfalzgraf",
    role: "Data Analyst Apprentice",
    period: "Feb 2025 - May 2025",
    highlights: [
      "Developed an interactive legal performance dashboard that cut review time from 22+ hours to under 5 minutes.",
      "Designed ETL flows with Power BI, Excel, and Power Query to structure legacy data for reporting.",
      "Translated client KPIs into dashboards with API integrations and scheduled refresh automation.",
      "Improved reporting accuracy and operational efficiency by 60% through multi-source data automation.",
    ],
  },
  {
    company: "Sophtimize Consultancy Services",
    role: "Data Analyst and ML Ops Intern",
    period: "Dec 2024 - Feb 2025",
    highlights: [
      "Built Snowflake, DBT, and Airflow pipelines over 3,000+ retail, inventory, and customer records.",
      "Improved pipeline performance by 60% and reduced downstream data errors by 40% using SQL validation layers.",
      "Enabled reproducible ML workflows with versioned DBT models and scheduled orchestration.",
      "Created Tableau dashboards for data freshness, feature distributions, and business KPIs.",
    ],
  },
  {
    company: "Dentsu",
    role: "Data Analyst | Clients: Qualtrics, The Home Depot, Kmart, Meta",
    period: "Jun 2022 - Jun 2024",
    highlights: [
      "Analyzed 500+ retail transactions and feedback records to identify 10+ customer behavior patterns.",
      "Built an NLP sentiment analysis model with 85-87% classification accuracy using Python and TF-IDF.",
      "Performed customer performance and segment analysis using SQL joins and aggregations.",
      "Automated Power BI KPI dashboards and reduced manual reporting effort by about 50%.",
    ],
  },
];

const projects = [
  {
    rank: "01",
    title: "Experiment Intelligence at Meta",
    category: "Statistical Analysis | Forecasting | Power BI",
    description:
      "Applied regression, time-series analysis, and A/B testing on 10M+ rows to improve insight-led decision outcomes by 15-25%.",
    metrics: "10M+ rows  15+ KPIs  40% less manual evaluation",
  },
  {
    rank: "02",
    title: "Legal Performance Dashboard",
    category: "Power BI | ETL | KPI Automation",
    description:
      "Built a law firm dashboard and reporting workflow that reduced employee performance review time from 22+ hours to under 5 minutes.",
    metrics: "22+ hrs to 5 min  API refresh  60% efficiency gain",
  },
  {
    rank: "03",
    title: "Retail Data + ML Pipeline",
    category: "Snowflake | DBT | Airflow | Tableau",
    description:
      "Designed scalable pipelines and monitoring dashboards for retail, inventory, and customer data to support ML-ready analytics.",
    metrics: "3,000+ records  60% faster pipelines  40% fewer errors",
  },
  {
    rank: "04",
    title: "Customer Sentiment and KPI Reporting",
    category: "Python | SQL | Power BI | NLP",
    description:
      "Combined segmentation analysis, sentiment modeling, and business KPI reporting to uncover behavior trends and reduce manual reporting effort.",
    metrics: "85-87% NLP accuracy  10+ behavior patterns  50% less reporting",
  },
];

const achievements = [
  {
    value: "4+ Years",
    label: "Analytics experience across multiple business domains",
  },
  {
    value: "50%",
    label: "Reduction in manual report preparation through automation",
  },
  {
    value: "60%",
    label: "Operational efficiency and pipeline performance improvements",
  },
];

export default function App() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [activeTheme, setActiveTheme] = useState("hero");
  const pageRef = useRef(null);
  const experienceStepRefs = useRef([]);
  const activeRole = experience[activeExperience] ?? experience[0];

  useEffect(() => {
    const steps = experienceStepRefs.current.filter(Boolean);
    if (!steps.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          setActiveExperience(Number(entry.target.getAttribute("data-index")));
        });
      },
      {
        rootMargin: "-18% 0px -42% 0px",
        threshold: 0,
      },
    );

    steps.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) {
      return undefined;
    }

    const revealNodes = Array.from(page.querySelectorAll("[data-reveal]"));
    const sectionNodes = Array.from(page.querySelectorAll("[data-theme-section]"));

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) {
          return;
        }

        setActiveTheme(visibleEntries[0].target.getAttribute("data-theme-section"));
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-18% 0px -32% 0px",
      },
    );

    revealNodes.forEach((node) => revealObserver.observe(node));
    sectionNodes.forEach((node) => sectionObserver.observe(node));

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className={`page-shell theme-${activeTheme}`} ref={pageRef}>
      <div className="dynamic-backdrop" aria-hidden="true">
        <div className="backdrop-wash" />
        <div className="backdrop-orb orb-primary" />
        <div className="backdrop-orb orb-secondary" />
        <div className="backdrop-grid" />
      </div>

      <header className="billboard" id="home" data-theme-section="hero">
        <nav className="topbar">
          <a href="#home" className="wordmark">
            <span className="wordmark-mark">PP</span>
            <span className="wordmark-text">{profile.name}</span>
          </a>

          <div className="nav-links">
            <a href="#featured">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-backdrop" />

        <section className="hero-content" data-reveal>
          <div className="hero-badges">
            <span className="hero-status">{profile.citizenship}</span>
          </div>
          <p className="hero-kicker">Now Streaming: {profile.name}</p>
          <h1>{profile.headline}</h1>
          <p className="hero-role">{profile.title}</p>
          <p className="hero-description">{profile.summary}</p>
          <p className="hero-support">{profile.description}</p>

          <div className="hero-meta">
            <span>SQL</span>
            <span>Power BI</span>
            <span>Snowflake</span>
            <span>Python</span>
            <span>Data Visualization</span>
          </div>

          <div className="hero-actions">
            <a href="#experience" className="primary-button">
              View Experience
            </a>
            <a
              href={profile.resume}
              className="secondary-button"
              target="_blank"
              rel="noreferrer"
            >
              Open Resume
            </a>
          </div>

          <div className="hero-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>{profile.phone}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>

          <div className="hero-stats">
            {achievements.map((item) => (
              <article key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>
      </header>

      <main className="content">
        <section
          className="content-row"
          id="featured"
          data-theme-section="featured"
        >
          <div className="row-heading">
            <h2>Featured Skills</h2>
          </div>

          <div className="card-row">
            {featuredSkills.map((skill, index) => (
              <article
                key={skill.title}
                className="feature-card"
                data-reveal
                style={{ "--delay": `${index * 90}ms` }}
              >
                <span className="card-badge">{skill.badge}</span>
                <h3>{skill.title}</h3>
                <p>{skill.subtitle}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-row" data-theme-section="stack">
          <div className="row-heading">
            <h2>Tool Stack</h2>
          </div>

          <div className="spotlight-strip">
            {stack.map((item, index) => (
              <div
                key={item}
                className="spotlight-chip"
                data-reveal
                style={{ "--delay": `${index * 45}ms` }}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section
          className="content-row"
          id="experience"
          data-theme-section="experience"
        >
          <div className="row-heading">
            <h2>Experience Episodes</h2>
          </div>

          <div className="experience-sequence">
            <div className="experience-stage">
              <article
                key={`${activeRole.company}-${activeRole.period}`}
                className="experience-card experience-stage-card"
              >
                <div className="experience-scene-header">
                  <div>
                    <p className="experience-period">{activeRole.period}</p>
                    <h3>{activeRole.role}</h3>
                    <h4>{activeRole.company}</h4>
                  </div>
                  <span className="experience-episode">
                    Episode {String(activeExperience + 1).padStart(2, "0")}
                  </span>
                </div>

                <ul className="experience-highlights">
                  {activeRole.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="experience-steps">
              {experience.map((item, index) => (
                <div
                  key={`${item.company}-${item.role}`}
                  ref={(node) => {
                    experienceStepRefs.current[index] = node;
                  }}
                  data-index={index}
                  className={`experience-step ${index === activeExperience ? "is-current" : ""}`}
                >
                  <span className="experience-step-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="experience-step-copy">
                    <p>{item.period}</p>
                    <h3>{item.company}</h3>
                    <span>{item.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="content-row"
          id="projects"
          data-theme-section="projects"
        >
          <div className="row-heading">
            <h2>Projects and Impact</h2>
          </div>
          <div className="poster-row">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="poster-card"
                data-reveal
                style={{ "--delay": `${index * 110}ms` }}
              >
                <div className="poster-rank">{project.rank}</div>
                <div className="poster-overlay">
                  <p className="poster-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span>{project.metrics}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="content-row"
          id="education"
          data-theme-section="education"
        >
          <div className="row-heading">
            <h2>Education and Foundations</h2>
            <p>
              Graduate training and analytical methods that support Priyal&apos;s
              reporting, experimentation, and decision-making work.
            </p>
          </div>

          <div className="education-grid">
            <article className="education-card" data-reveal>
              <p className="education-kicker">University at Buffalo, SUNY</p>
              <h3>Master&apos;s in Management Information Systems (STEM)</h3>
              <p className="education-meta">Buffalo, NY | May 2025</p>
              <p>
                Relevant coursework: Data Warehouse, Predictive Analytics,
                Database Management, and Risk Management.
              </p>
            </article>

            <article
              className="education-card compact-card"
              data-reveal
              style={{ "--delay": "120ms" }}
            >
              <p className="education-kicker">Additional Strengths</p>
              <h3>Analytics Methods</h3>
              <p>
                Exploratory Data Analysis, hypothesis testing, regression,
                clustering, classification, and data visualization.
              </p>
            </article>
          </div>
        </section>

        <section
          className="content-row contact-row"
          id="contact"
          data-theme-section="contact"
        >
          <div className="contact-card" data-reveal>
            <p className="contact-kicker">Contact</p>
            <h2>Open to data analyst opportunities, BI work, and insight-focused roles.</h2>
            <p>
              Reach out directly for data analyst, reporting, dashboard,
              analytics engineering, or MLOps-adjacent opportunities.
            </p>

            <div className="contact-actions">
              <a href={`mailto:${profile.email}`} className="primary-button">
                Email Priyal
              </a>
              <a href={profile.github} className="secondary-button" target="_blank" rel="noreferrer">
                View GitHub
              </a>
            </div>

            <div className="contact-details">
              <span>{profile.email}</span>
              <span>{profile.phone}</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
