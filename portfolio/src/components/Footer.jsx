import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const footerLinks = {
  Navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "Website Development", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "Full Stack Apps", href: "#services" },
    { label: "API Integration", href: "#services" },
  ],
  Connect: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "Instagram", href: "https://instagram.com" },
  ],
};

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer
      ref={ref}
      style={{
        background: "#080810",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "72px 24px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #7c3aed, #06b6d4, transparent)",
        }}
      />

      {/* Background orb */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(124,58,237,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Top section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "64px",
          }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: "span 1" }}>
            {/* FIXED: Re-added opening <a> tag */}
            <a
              href="#home"
              style={{
                textDecoration: "none",
                fontSize: "1.8rem",
                fontWeight: 800,
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                marginBottom: "16px",
              }}
            >
              PK.
            </a>
            <p
              style={{
                fontSize: "0.88rem",
                color: "#4b5563",
                lineHeight: 1.85,
                maxWidth: "240px",
                marginBottom: "24px",
              }}
            >
              Full Stack MERN Developer building fast, modern websites that
              help businesses grow online.
            </p>

            {/* Status */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "7px 14px",
                borderRadius: "50px",
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.2)",
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 8px #22c55e",
                }}
              />
              <span style={{ fontSize: "0.78rem", color: "#22c55e", fontWeight: 600 }}>
                Available for work
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links], colIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (colIndex + 1) }}
            >
              <h4
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#6b7280",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                {category}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  padding: 0, // FIXED: Added padding 0 to reset default ul styles
                  margin: 0,
                }}
              >
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      rel="noreferrer"
                      whileHover={{ x: 4 }}
                      style={{
                        textDecoration: "none",
                        fontSize: "0.88rem",
                        color: "#4b5563",
                        fontWeight: 500,
                        transition: "color 0.3s ease",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
            marginBottom: "28px",
          }}
        />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "0.82rem", color: "#374151", margin: 0 }}>
            © {new Date().getFullYear()} Prashant Kumar. All rights reserved.
          </p>
          <p style={{ fontSize: "0.82rem", color: "#374151", margin: 0 }}>
            Built with ⚛️ React + 🎞️ Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;