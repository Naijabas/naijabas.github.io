const TECH_STACK = [
  "PHP",
  "Laravel",
  "Vue.js",
  "React",
  "WordPress",
  "AWS",
  "Docker",
  "MySQL",
  "TypeScript",
  "Tailwind CSS",
  "Redis",
  "CI/CD",
];

export function MarqueeStrip() {
  const items = [...TECH_STACK, ...TECH_STACK];

  return (
    <div
      style={{
        background: "#C9A96E",
        overflow: "hidden",
        padding: "18px 0",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-track">
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 0,
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#0D0D0D",
                padding: "0 32px",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
            <span
              style={{
                color: "rgba(13,13,13,0.4)",
                fontSize: "16px",
                flexShrink: 0,
              }}
            >
              ·
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
