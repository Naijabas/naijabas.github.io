import { useState } from "react";

const PROJECTS = [
  {
    id: 1,
    tag: "Fintech · Banking",
    title: "KrediBank Platform",
    description:
      "Designed and implemented a high-throughput wallet system for large-scale customer transactions, a card management platform enabling debit card creation, block/unblock, and PIN resets, plus Insurance APIs for policy lifecycle management.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYmFua2luZyUyMGFwcCUyMGRhc2hib2FyZCUyMGRhcmt8ZW58MXx8fHwxNzc5MTk3NTUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    year: "2022–2024",
    tech: ["Laravel", "Node.js", "MySQL", "Redis", "AWS"],
    caseStudyUrl: "#",
  },
  {
    id: 2,
    tag: "E-Commerce · Banking",
    title: "Union Bank Mall",
    description:
      "Built an internal e-commerce mall from scratch used by 1,500+ Union Bank staff. Developed custom WooCommerce plugins integrating the UBN MiServe Payment Gateway, Active Directory, and a stock management system for imported and exported product data.",
    image:
      "https://images.unsplash.com/photo-1759323321196-2813db509285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaG9wcGluZyUyMG1vZGVybiUyMGFyY2hpdGVjdHVyZSUyMGludGVyaW9yfGVufDF8fHx8MTc3OTE5NzU1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    year: "2020–2021",
    tech: ["WordPress", "WooCommerce", "PHP", "REST APIs"],
    caseStudyUrl: "#",
  },
  {
    id: 3,
    tag: "Payments · Fintech",
    title: "WinsusuPay",
    description:
      "Lead Engineer on a mobile-first rotating savings and credit association (ROSCA) platform with escrow wallets, automated disbursements, and KYC verification. Led product direction, coded feature changes based on user feedback, and grew the active user base.",
    image:
      "https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGF5bWVudCUyMG1vYmlsZSUyMGFwcCUyMG1vZGVybnxlbnwxfHx8fDE3NzkxOTc1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    year: "2021–2022",
    tech: ["Laravel", "Vue.js", "MySQL", "AWS"],
    caseStudyUrl: "#",
  },
  {
    id: 4,
    tag: "Art · Marketplace",
    title: "Artgidi Marketplace",
    description:
      "Developed both the front-end and REST API for a digital art marketplace connecting creators and collectors, featuring real-time bidding, secure payments, and personalised discovery. Built at Lenilabs with full ownership of the technical architecture.",
    image:
      "https://images.unsplash.com/photo-1674027392887-751d6396b710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZWNvbW1lcmNlJTIwbWFya2V0cGxhY2UlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc5MTk3NTUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    year: "2021–2022",
    tech: ["Laravel", "Vue.js", "PHP", "MySQL"],
    caseStudyUrl: "#",
  },
  {
    id: 5,
    tag: "HR · Enterprise SaaS",
    title: "Timoltech HR Platform",
    description:
      "Maintained and extended enterprise HR software powering human resources operations for 2,000+ companies across the UK. Led a process re-engineering project restructuring communication flow across 10 departments, improving end-to-end service delivery.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    year: "2021–2024",
    tech: ["PHP", "Laravel", "Vue.js", "MySQL", "Docker"],
    caseStudyUrl: "#",
  },
  {
    id: 6,
    tag: "Telecom · Community",
    title: "USSD Community Apps",
    description:
      "Built and deployed USSD applications serving 20,000+ users in local and rural Nigerian communities. Handled full lifecycle: architecture, development, deployment, and ongoing maintenance across multiple municipal and community use-cases.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    year: "2020–2022",
    tech: ["PHP", "Laravel", "MySQL", "REST APIs"],
    caseStudyUrl: "#",
  },
];

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  const [hovered, setHovered] = useState(false);
  const isComingSoon = project.caseStudyUrl === "#";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#111111",
        border: `1px solid ${hovered ? "rgba(201,169,110,0.35)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "12px",
        overflow: "hidden",
        transition: "border-color 0.3s ease, transform 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            filter: "brightness(0.65)",
          }}
        />
        {/* Year badge */}
        <span
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 500,
            color: "#0D0D0D",
            background: "#C9A96E",
            padding: "4px 10px",
            borderRadius: "3px",
            letterSpacing: "0.08em",
          }}
        >
          {project.year}
        </span>
        {/* Coming soon badge */}
        {isComingSoon && (
          <span
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px",
              fontWeight: 500,
              color: "#F5F2EE",
              background: "rgba(13,13,13,0.75)",
              border: "1px solid rgba(201,169,110,0.35)",
              padding: "4px 10px",
              borderRadius: "3px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              backdropFilter: "blur(4px)",
            }}
          >
            Case Study Soon
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "24px 28px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Tag */}
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#C9A96E",
            marginBottom: "10px",
          }}
        >
          {project.tag}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "20px",
            fontWeight: 600,
            color: "#F5F2EE",
            margin: "0 0 10px",
            lineHeight: 1.25,
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13.5px",
            fontWeight: 300,
            color: "#6B6B6B",
            lineHeight: 1.75,
            margin: "0 0 16px",
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tech chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 400,
                color: "#7A7A7A",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "3px 10px",
                borderRadius: "100px",
                letterSpacing: "0.02em",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* View link */}
        <a
          href={project.caseStudyUrl}
          onClick={isComingSoon ? (e) => e.preventDefault() : undefined}
          title={isComingSoon ? "Case study in progress" : undefined}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            color: isComingSoon ? "#3A3A3A" : hovered ? "#C9A96E" : "#5A5A5A",
            letterSpacing: "0.04em",
            transition: "color 0.3s",
            textDecoration: "none",
            cursor: isComingSoon ? "default" : "pointer",
          }}
        >
          {isComingSoon ? "Case Study In Progress" : "View Case Study"}
          {isComingSoon ? (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4l3 3" />
            </svg>
          ) : (
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ transition: "transform 0.3s", transform: hovered ? "translateX(4px)" : "none" }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          )}
        </a>
      </div>
    </div>
  );
}

export function WorkSection() {
  return (
    <section
      id="work"
      style={{
        background: "#0D0D0D",
        padding: "120px 60px",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: "64px" }}>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#C9A96E",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span style={{ display: "inline-block", width: "28px", height: "1px", background: "#C9A96E" }} />
            Selected Work
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 4vw, 52px)",
              fontWeight: 700,
              color: "#F5F2EE",
              margin: 0,
              letterSpacing: "-0.8px",
              lineHeight: 1.15,
            }}
          >
            Projects that speak
            <br />
            <span style={{ fontStyle: "italic", color: "#C9A96E" }}>for themselves.</span>
          </h2>
        </div>

        {/* All projects — 3-column grid, no pagination */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
