import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// ─── EmailJS credentials (optional upgrade) ─────────────────────────────────
// If you fill these in, the form submits silently via EmailJS.
// Sign up at https://emailjs.com → add Gmail service → create template with
// variables: {{from_name}}, {{from_email}}, {{message}}.
// If left as placeholders, the form falls back to opening your email client
// pre-filled — which works perfectly without any account setup.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";
// ────────────────────────────────────────────────────────────────────────────

const emailjsConfigured =
  EMAILJS_SERVICE_ID.length > 0 &&
  EMAILJS_TEMPLATE_ID.length > 0 &&
  EMAILJS_PUBLIC_KEY.length > 0;

type Status = "idle" | "sending" | "success" | "error";

function ContactModal({ onClose }: { onClose: () => void }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#1A1A1A",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "6px",
    padding: "12px 16px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    fontWeight: 300,
    color: "#F5F2EE",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#6B6B6B",
    display: "block",
    marginBottom: "8px",
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    const data = new FormData(formRef.current);
    const name = (data.get("from_name") as string) ?? "";
    const email = (data.get("from_email") as string) ?? "";
    const message = (data.get("message") as string) ?? "";

    setStatus("sending");
    setErrorMsg("");

    if (emailjsConfigured) {
      try {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        );
        setStatus("success");
      } catch (err) {
        setStatus("error");
        setErrorMsg(
          err instanceof Error ? err.message : "Something went wrong. Please try again."
        );
      }
    } else {
      // Mailto fallback — always works, opens the email client pre-filled
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      );
      window.open(
        `mailto:basitibitoye@gmail.com?subject=${subject}&body=${body}`,
        "_blank"
      );
      setStatus("success");
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(4px)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {/* Modal card */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#111111",
            border: "1px solid rgba(201,169,110,0.2)",
            borderRadius: "16px",
            padding: "48px",
            width: "100%",
            maxWidth: "520px",
            position: "relative",
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "transparent",
              border: "none",
              color: "#6B6B6B",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F5F2EE")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6B6B6B")}
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div style={{ marginBottom: "36px" }}>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#C9A96E",
                marginBottom: "12px",
              }}
            >
              Get In Touch
            </div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "28px",
                fontWeight: 700,
                color: "#F5F2EE",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Send a Message
            </h3>
          </div>

          {/* Success state */}
          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "rgba(201,169,110,0.12)",
                  border: "1px solid rgba(201,169,110,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "#F5F2EE",
                  margin: "0 0 10px",
                }}
              >
                {emailjsConfigured ? "Message Sent!" : "Email Client Opened!"}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#6B6B6B",
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                {emailjsConfigured
                  ? "Thanks for reaching out. I'll get back to you within 24 hours."
                  : "Your email client should have opened with the message pre-filled. Just hit Send!"}
              </p>
            </div>
          ) : (
            /* Form */
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="from_name" style={labelStyle}>Name</label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  required
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.5)")}
                  onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="from_email" style={labelStyle}>Email</label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.5)")}
                  onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>

              <div style={{ marginBottom: "28px" }}>
                <label htmlFor="message" style={labelStyle}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                  onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.5)")}
                  onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>

              {status === "error" && (
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    color: "#E07070",
                    margin: "0 0 16px",
                    lineHeight: 1.5,
                  }}
                >
                  {errorMsg || "Failed to send. Please email basitibitoye@gmail.com directly."}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  width: "100%",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  color: "#0D0D0D",
                  background: status === "sending" ? "#9a7f52" : "#C9A96E",
                  border: "none",
                  padding: "15px 24px",
                  borderRadius: "6px",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  transition: "background 0.25s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                {status === "sending" ? (
                  <>
                    Sending…
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ animation: "spin 1s linear infinite" }}
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </>
  );
}

export function ContactSection() {
  const [btnHovered, setBtnHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        id="contact"
        style={{
          background: "#0A0A0A",
          padding: "140px 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background orb */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(201,169,110,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          {/* Section label */}
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#C9A96E",
              marginBottom: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <span style={{ display: "inline-block", width: "28px", height: "1px", background: "#C9A96E" }} />
            Get In Touch
            <span style={{ display: "inline-block", width: "28px", height: "1px", background: "#C9A96E" }} />
          </div>

          {/* Main CTA headline */}
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(40px, 5.5vw, 76px)",
              fontWeight: 700,
              color: "#F5F2EE",
              margin: "0 0 16px",
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
            }}
          >
            Let's build something
          </h2>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(40px, 5.5vw, 76px)",
              fontWeight: 700,
              color: "#C9A96E",
              margin: "0 0 52px",
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
            }}
          >
            remarkable together.
          </h2>

          {/* Divider */}
          <div
            style={{
              width: "1px",
              height: "48px",
              background: "linear-gradient(to bottom, rgba(201,169,110,0.5), transparent)",
              margin: "0 auto 40px",
            }}
          />

          {/* Email */}
          <a
            href="mailto:basitibitoye@gmail.com"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              color: "#C9A96E",
              textDecoration: "none",
              letterSpacing: "0.06em",
              display: "block",
              marginBottom: "48px",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            basitibitoye@gmail.com
          </a>

          {/* CTA Button — opens modal */}
          <button
            onClick={() => setModalOpen(true)}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              color: "#0D0D0D",
              background: btnHovered ? "#d4b47a" : "#C9A96E",
              border: "none",
              padding: "16px 40px",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background 0.25s, transform 0.25s",
              transform: btnHovered ? "translateY(-3px)" : "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Send a Message
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          {/* Availability note */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 300,
              color: "#4A4A4A",
              marginTop: "32px",
              letterSpacing: "0.04em",
            }}
          >
            Currently available for freelance &amp; contract engagements
          </p>
        </div>
      </section>

      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
