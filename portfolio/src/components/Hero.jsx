import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack MERN Developer",
        "UI/UX Designer",
        "React Specialist",
        "Problem Solver 🚀",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1800,
      loop: true,
      cursorChar: "|",
    });
    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 24px",
      }}
    >
      {/* ── Animated background orbs ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {/* Orb 1 */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "15%",
            left: "10%",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Orb 2 */}
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            position: "absolute",
            top: "40%",
            right: "10%",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Orb 3 */}
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 30, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          style={{
            position: "absolute",
            bottom: "10%",
            left: "30%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Main Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1100px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "48px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT — Text */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "50px",
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.3)",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 8px #22c55e",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "0.85rem",
                color: "#a78bfa",
                fontWeight: 500,
              }}
            >
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "12px",
              letterSpacing: "-1px",
            }}
          >
            Hi, I'm{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Prashant Kumar
            </span>
          </motion.h1>

          {/* Typed role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              fontWeight: 600,
              color: "#06b6d4",
              marginBottom: "20px",
              minHeight: "40px",
            }}
          >
            <span ref={typedRef} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              fontSize: "1rem",
              color: "#9ca3af",
              lineHeight: 1.8,
              maxWidth: "480px",
              marginBottom: "32px",
            }}
          >
            I build fast, modern websites that help businesses grow online.
            Clean code. Beautiful design. Real results.
          </motion.p>

          {/* Checkmarks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginBottom: "40px",
            }}
          >
            {[
              "Responsive Design",
              "Fast Delivery (2–3 Days)",
              "Affordable Pricing",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.95rem",
                  color: "#d1d5db",
                }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "rgba(124,58,237,0.2)",
                    border: "1px solid rgba(124,58,237,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.7rem",
                    color: "#a78bfa",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                {item}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            {/* View Work */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "14px 32px",
                borderRadius: "50px",
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 0 30px rgba(124,58,237,0.4)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              View My Work
              <span style={{ fontSize: "1.1rem" }}>→</span>
            </motion.a>

            {/* Hire Me */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "14px 32px",
                borderRadius: "50px",
                background: "transparent",
                color: "#f1f1f1",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor =
                  "rgba(255,255,255,0.15)")
              }
            >
              Hire Me ⚡
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "48px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              flexWrap: "wrap",
            }}
          >
            {[
              { number: "2+", label: "Years Experience" },
              { number: "15+", label: "Projects Built" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#6b7280",
                    marginTop: "2px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Avatar Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ flex: "0 0 auto" }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "relative" }}
          >
            {/* Glow ring */}
            <div
              style={{
                position: "absolute",
                inset: "-3px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                zIndex: 0,
              }}
            />

            {/* Photo / Avatar */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: "260px",
                height: "260px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #1e1b4b, #164e63)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "7rem",
                border: "4px solid #0a0a0f",
                overflow: "hidden",
              }}
            >
              {/* Replace emoji with <img> when you have your photo */}
              👨‍💻
            </div>

            {/* Floating badge — React */}
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: "10px",
                right: "-20px",
                background: "rgba(18,18,26,0.95)",
                border: "1px solid rgba(124,58,237,0.4)",
                borderRadius: "12px",
                padding: "8px 14px",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#a78bfa",
                backdropFilter: "blur(10px)",
                whiteSpace: "nowrap",
              }}
            >
              ⚛️ React Dev
            </motion.div>

            {/* Floating badge — Node */}
            <motion.div
              animate={{ x: [0, -6, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              style={{
                position: "absolute",
                bottom: "10px",
                left: "-24px",
                background: "rgba(18,18,26,0.95)",
                border: "1px solid rgba(6,182,212,0.4)",
                borderRadius: "12px",
                padding: "8px 14px",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#06b6d4",
                backdropFilter: "blur(10px)",
                whiteSpace: "nowrap",
              }}
            >
              🟢 Node.js
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ fontSize: "0.75rem", color: "#4b5563" }}>
          scroll down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: "24px",
            height: "38px",
            border: "2px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: "4px",
              height: "8px",
              borderRadius: "2px",
              background: "linear-gradient(180deg, #7c3aed, #06b6d4)",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;