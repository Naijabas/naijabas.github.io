export function Hero() {
  const stats = [
    { value: "6+", label: "Years Experience" },
    { value: "40+", label: "Projects Delivered" },
    { value: "20k+", label: "Users Served" },
  ];

  return (
    <section
      id="work"
      style={{
        background: "#0D0D0D",
        minHeight: "100vh",
        padding: "0 60px",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(201,169,110,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Glow orb */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "15%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1320px",
          margin: "0 auto",
          paddingTop: "72px",
          gap: "60px",
        }}
      >
        {/* Left: Headline + Subtitle + CTAs */}
        <div style={{ flex: "0 0 auto", maxWidth: "680px" }}>
          {/* Small label */}
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              color: "#C9A96E",
              textTransform: "uppercase",
              marginBottom: "28px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span
              style={{ display: "inline-block", width: "32px", height: "1px", background: "#C9A96E" }}
            />
            Available for work · Toronto, Canada
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(64px, 7vw, 96px)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#F5F2EE",
              margin: 0,
              letterSpacing: "-1.5px",
            }}
          >
            Crafting Digital
          </h1>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(64px, 7vw, 96px)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#C9A96E",
              margin: 0,
              letterSpacing: "-1.5px",
              marginBottom: "32px",
            }}
          >
            Experiences.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "17px",
              fontWeight: 300,
              color: "#7A7A7A",
              lineHeight: 1.7,
              maxWidth: "480px",
              marginBottom: "48px",
            }}
          >
            Senior full-stack engineer specialising in PHP/Laravel, TypeScript &amp; React —
            building high-availability fintech, banking &amp; SaaS platforms used by thousands.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <a
              href="#work"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                color: "#0D0D0D",
                background: "#C9A96E",
                padding: "14px 32px",
                borderRadius: "4px",
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "all 0.25s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#d4b47a";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#C9A96E";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              View My Work
            </a>
            <a
              href="https://www.linkedin.com/in/basit-ibitoye-aa9772285/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                color: "#F5F2EE",
                background: "transparent",
                padding: "13px 32px",
                borderRadius: "4px",
                textDecoration: "none",
                letterSpacing: "0.04em",
                border: "1px solid rgba(245,242,238,0.25)",
                transition: "all 0.25s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#C9A96E";
                (e.currentTarget as HTMLElement).style.color = "#C9A96E";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,242,238,0.25)";
                (e.currentTarget as HTMLElement).style.color = "#F5F2EE";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Right: Stat Cards */}
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "flex-start",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,169,110,0.15)",
                borderRadius: "12px",
                padding: "28px 40px",
                backdropFilter: "blur(8px)",
                transform: i === 1 ? "translateX(40px)" : i === 2 ? "translateX(20px)" : "none",
                minWidth: "200px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "56px",
                  fontWeight: 700,
                  color: "#C9A96E",
                  lineHeight: 1,
                  letterSpacing: "-1px",
                  marginBottom: "8px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "#7A7A7A",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "60px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "60px",
            background: "linear-gradient(to bottom, #C9A96E, transparent)",
          }}
        />
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "#7A7A7A",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
