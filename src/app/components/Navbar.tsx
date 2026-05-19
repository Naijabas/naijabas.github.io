import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 60px",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(13,13,13,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,169,110,0.12)" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      {/* Logo */}
      <span
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: "26px",
          fontWeight: 600,
          color: "#C9A96E",
          letterSpacing: "-0.5px",
          cursor: "pointer",
        }}
      >
        Basit.
      </span>

      {/* Nav Links + CTA */}
      <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
        {["Work", "About", "Services", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: "#F5F2EE",
              textDecoration: "none",
              letterSpacing: "0.02em",
              opacity: 0.75,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "1")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "0.75")}
          >
            {link}
          </a>
        ))}

        <a
          href="#contact"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            color: "#0D0D0D",
            background: "#C9A96E",
            padding: "8px 20px",
            borderRadius: "4px",
            textDecoration: "none",
            letterSpacing: "0.04em",
            transition: "background 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#d4b47a";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#C9A96E";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          Hire
        </a>
      </div>
    </nav>
  );
}
