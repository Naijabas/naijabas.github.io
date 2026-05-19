const SKILLS = [
  "PHP/Laravel",
  "Node.js",
  "TypeScript",
  "React",
  "Vue.js",
  "WordPress",
  "WooCommerce",
  "AWS",
  "Docker",
  "MySQL",
  "Redis",
  "GraphQL",
  "CI/CD",
  "REST APIs",
];

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: "#111111",
        padding: "120px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative vertical line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "calc(50% - 1px)",
          width: "1px",
          background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.12), transparent)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        {/* Section label */}
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#C9A96E",
            marginBottom: "64px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span style={{ display: "inline-block", width: "28px", height: "1px", background: "#C9A96E" }} />
          About
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
            marginBottom: "80px",
          }}
        >
          {/* Left: Big title */}
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(38px, 4.5vw, 60px)",
                fontWeight: 700,
                color: "#F5F2EE",
                margin: 0,
                lineHeight: 1.15,
                letterSpacing: "-0.8px",
              }}
            >
              Engineer.
              <br />
              <span style={{ color: "#C9A96E", fontStyle: "italic" }}>Builder.</span>
              <br />
              Problem Solver.
            </h2>

            {/* Decorative accent */}
            <div
              style={{
                width: "60px",
                height: "3px",
                background: "#C9A96E",
                borderRadius: "2px",
                marginTop: "40px",
              }}
            />
          </div>

          {/* Right: Bio paragraphs */}
          <div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "16px",
                fontWeight: 300,
                color: "#A0A0A0",
                lineHeight: 1.85,
                marginBottom: "28px",
              }}
            >
              I'm Basit — a senior full-stack engineer with 6+ years shipping high-traffic,
              high-availability platforms across fintech, banking, HR, and enterprise SaaS.
              Based in Toronto, my core stack is TypeScript/Node.js and PHP/Laravel on the
              backend, React and Vue.js on the frontend, deployed on AWS using Docker and CI/CD
              pipelines.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "16px",
                fontWeight: 300,
                color: "#A0A0A0",
                lineHeight: 1.85,
              }}
            >
              I've shipped wallet systems, card management platforms, payment gateways,
              e-commerce integrations, CRM tools, and USSD applications — systems used by
              thousands in production at companies like KrediBank and Union Bank of Nigeria.
              I bring a product mindset to every line of code: clean architecture, system
              reliability, and software that genuinely moves the needle.
            </p>
          </div>
        </div>

        {/* Skill chips */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "48px",
          }}
        >
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#5A5A5A",
              marginBottom: "24px",
            }}
          >
            Core Technologies
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {SKILLS.map((skill) => (
              <span
                key={skill}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "#F5F2EE",
                  background: "rgba(201,169,110,0.08)",
                  border: "1px solid rgba(201,169,110,0.2)",
                  padding: "8px 18px",
                  borderRadius: "100px",
                  letterSpacing: "0.02em",
                  transition: "background 0.2s, border-color 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(201,169,110,0.16)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(201,169,110,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.2)";
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
