import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ["home", "about", "services", "projects", "contact"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Detect if section is in view
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "12px 40px" : "20px 40px",
          background: scrolled
            ? "rgba(10, 10, 15, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "none",
          transition: "all 0.4s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          style={{
            textDecoration: "none",
            fontSize: "1.5rem",
            fontWeight: 800,
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.5px",
          }}
        >
          PK<span style={{ color: "#06b6d4" }}>.</span>
        </motion.a>

        {/* Desktop Links */}
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              {/* FIXED: Re-added the <a> tag opening that was missing */}
              <a
                href={link.href}
                style={{
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color:
                    activeSection === link.href.replace("#", "")
                      ? "#06b6d4"
                      : "#9ca3af",
                  position: "relative",
                  transition: "color 0.3s ease",
                  paddingBottom: "4px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#f1f1f1")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    activeSection === link.href.replace("#", "")
                      ? "#06b6d4"
                      : "#9ca3af")
                }
              >
                {link.label}
                {/* Active underline */}
                {activeSection === link.href.replace("#", "") && (
                  <motion.span
                    layoutId="activeUnderline"
                    style={{
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background:
                        "linear-gradient(90deg, #7c3aed, #06b6d4)",
                      borderRadius: "2px",
                    }}
                  />
                )}
              </a>
            </motion.li>
          ))}

          {/* Hire Me Button */}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "inline-block",
                textDecoration: "none",
                padding: "10px 24px",
                borderRadius: "50px",
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.9rem",
                boxShadow: "0 0 20px rgba(124,58,237,0.4)",
                transition: "box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 35px rgba(124,58,237,0.7)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(124,58,237,0.4)")
              }
            >
              Hire Me ⚡
            </motion.a>
          </motion.li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer", // FIXED: Changed from "none" to "pointer"
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
          className="hamburger"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{
                rotate:
                  menuOpen && i === 0
                    ? 45
                    : menuOpen && i === 2
                    ? -45
                    : 0,
                y: menuOpen && i === 0 ? 7 : menuOpen && i === 2 ? -7 : 0,
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
                borderRadius: "2px",
                transformOrigin: "center",
              }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: "75px",
              left: "16px",
              right: "16px",
              zIndex: 999,
              background: "rgba(18, 18, 26, 0.97)",
              backdropFilter: "blur(20px)",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: "none",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  color:
                    activeSection === link.href.replace("#", "")
                      ? "#06b6d4"
                      : "#9ca3af",
                  fontWeight: 500,
                  fontSize: "1rem",
                  background:
                    activeSection === link.href.replace("#", "")
                      ? "rgba(6,182,212,0.08)"
                      : "transparent",
                  transition: "all 0.2s ease",
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;