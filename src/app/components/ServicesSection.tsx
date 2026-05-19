import { useState } from "react";

const SERVICES = [
  {
    number: "01",
    title: "Full-Stack Development",
    description:
      "End-to-end web applications built with Laravel, Vue.js, and React. Clean architecture, test coverage, and CI/CD pipelines from day one.",
    tags: ["Laravel", "Vue.js", "React", "PHP 8"],
  },
  {
    number: "02",
    title: "WordPress Engineering",
    description:
      "Custom themes, headless WordPress, advanced custom fields, WooCommerce extensions, and performance-optimised WordPress deployments at scale.",
    tags: ["WordPress", "WooCommerce", "Headless CMS", "ACF"],
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    description:
      "AWS architecture design, Docker containerisation, Kubernetes orchestration, automated deployments, and infrastructure-as-code with Terraform.",
    tags: ["AWS", "Docker", "Terraform", "CI/CD"],
  },
  {
    number: "04",
    title: "API & Integrations",
    description:
      "RESTful and GraphQL API design, third-party payment gateway integrations, webhook systems, and microservice communication layers.",
    tags: ["REST APIs", "GraphQL", "Webhooks", "Stripe"],
  },
];

function ServiceBlock({ service }: { service: (typeof SERVICES)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "40px 40px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        transition: "background 0.3s",
        background: hovered ? "rgba(201,169,110,0.04)" : "transparent",
        cursor: "default",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "28px" }}>
        {/* Number */}
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "13px",
            fontWeight: 400,
            color: "#C9A96E",
            opacity: 0.6,
            flexShrink: 0,
            marginTop: "4px",
            minWidth: "24px",
          }}
        >
          {service.number}
        </span>

        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "22px",
                fontWeight: 600,
                color: hovered ? "#C9A96E" : "#F5F2EE",
                margin: 0,
                transition: "color 0.3s",
                letterSpacing: "-0.3px",
              }}
            >
              {service.title}
            </h3>

            {/* Arrow icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke={hovered ? "#C9A96E" : "rgba(245,242,238,0.2)"}
              strokeWidth="1.5"
              style={{ transition: "all 0.3s", transform: hovered ? "rotate(-45deg)" : "none", flexShrink: 0 }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              color: "#6B6B6B",
              lineHeight: 1.8,
              margin: "0 0 20px",
              maxWidth: "480px",
            }}
          >
            {service.description}
          </p>

          {/* Tags */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {service.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "#5A5A5A",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "4px 12px",
                  borderRadius: "100px",
                  letterSpacing: "0.05em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        background: "#0D0D0D",
        padding: "120px 60px",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        {/* Two-column header layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Left: Title */}
          <div style={{ position: "sticky", top: "100px" }}>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#C9A96E",
                marginBottom: "24px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ display: "inline-block", width: "28px", height: "1px", background: "#C9A96E" }} />
              Services
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(38px, 4vw, 52px)",
                fontWeight: 700,
                color: "#F5F2EE",
                margin: "0 0 28px",
                lineHeight: 1.15,
                letterSpacing: "-0.8px",
              }}
            >
              What I can do
              <br />
              <span style={{ color: "#C9A96E", fontStyle: "italic" }}>for you.</span>
            </h2>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                color: "#6B6B6B",
                lineHeight: 1.8,
                maxWidth: "360px",
              }}
            >
              From concept to production — I cover the full spectrum of modern web engineering,
              with a focus on quality, performance, and maintainability.
            </p>
          </div>

          {/* Right: Service blocks */}
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            {SERVICES.map((service) => (
              <ServiceBlock key={service.number} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
