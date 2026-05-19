export function Footer() {
  const links = [
    { label: "GitHub", href: "https://github.com/Naijabas" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/basit-ibitoye-aa9772285/" },
    { label: "Email", href: "mailto:basitibitoye@gmail.com" },
  ];

  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(201,169,110,0.1)",
        padding: "36px 60px",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "22px",
            fontWeight: 600,
            color: "#C9A96E",
            letterSpacing: "-0.3px",
          }}
        >
          Basit.
        </span>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 300,
            color: "#3A3A3A",
            margin: 0,
            letterSpacing: "0.03em",
          }}
        >
          © {new Date().getFullYear()} Basit Ibitoye. All rights reserved.
        </p>

        {/* Social links */}
        <div style={{ display: "flex", gap: "28px" }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                color: "#5A5A5A",
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C9A96E")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5A5A5A")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
