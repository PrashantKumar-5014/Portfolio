import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React.js", level: 90, color: "#61dafb" },
  { name: "Node.js", level: 85, color: "#68a063" },
  { name: "MongoDB", level: 80, color: "#47a248" },
  { name: "Express.js", level: 85, color: "#f1f1f1" },
  { name: "JavaScript", level: 92, color: "#f7df1e" },
  { name: "Tailwind CSS", level: 88, color: "#06b6d4" },
  { name: "UI/UX Design", level: 78, color: "#7c3aed" },
  { name: "Git & GitHub", level: 82, color: "#f05032" },
];

const techStack = [
  { icon: "⚛️", label: "React" },
  { icon: "🟢", label: "Node.js" },
  { icon: "🍃", label: "MongoDB" },
  { icon: "⚡", label: "Express" },
  { icon: "🎨", label: "Tailwind" },
  { icon: "🐙", label: "GitHub" },
  { icon: "🎭", label: "Figma" },
  { icon: "☁️", label: "Vercel" },
];

// Reusable animated section wrapper
const FadeInWhenVisible = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Animated skill bar
const SkillBar = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} style={{ marginBottom: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "#d1d5db" }}>
          {skill.name}
        </span>
        <span style={{ fontSize: "0.85rem", color: skill.color, fontWeight: 600 }}>
          {skill.level}%
        </span>
      </div>

      {/* Track */}
      <div
        style={{
          height: "6px",
          borderRadius: "999px",
          background: "rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        {/* Fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.08, ease: "easeOut" }}
          style={{
            height: "100%",
            borderRadius: "999px",
            background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
            boxShadow: `0 0 10px ${skill.color}55`,
          }}
        />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: "120px 24px",
        background: "#0d0d14",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orb */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Section Label */}
        <FadeInWhenVisible>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#7c3aed",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Get To Know Me
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                marginTop: "12px",
                letterSpacing: "-0.5px",
              }}
            >
              About{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Me
              </span>
            </h2>

            {/* Divider */}
            <div
              style={{
                width: "60px",
                height: "3px",
                background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
                borderRadius: "999px",
                margin: "16px auto 0",
              }}
            />
          </div>
        </FadeInWhenVisible>

        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "60px",
            alignItems: "start",
          }}
        >
          {/* LEFT — Bio + Tech Stack */}
          <div>
            <FadeInWhenVisible direction="right" delay={0.1}>
              {/* Bio Card */}
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "20px",
                  padding: "32px",
                  marginBottom: "28px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <p
                  style={{
                    color: "#9ca3af",
                    lineHeight: 1.9,
                    fontSize: "0.97rem",
                  }}
                >
                  I'm a{" "}
                  <span style={{ color: "#a78bfa", fontWeight: 600 }}>
                    Full Stack Developer
                  </span>{" "}
                  with 2+ years of experience building real-world projects. I
                  specialize in creating modern, responsive, and user-friendly
                  websites using{" "}
                  <span style={{ color: "#06b6d4", fontWeight: 600 }}>
                    React, Node.js, and MongoDB.
                  </span>
                </p>

                <p
                  style={{
                    color: "#9ca3af",
                    lineHeight: 1.9,
                    fontSize: "0.97rem",
                    marginTop: "16px",
                  }}
                >
                  My goal is simple — help businesses grow online with
                  high-quality, fast, and affordable websites. I take pride in
                  clean code and pixel-perfect design.
                </p>
              </div>
            </FadeInWhenVisible>

            {/* Projects built */}
            <FadeInWhenVisible direction="right" delay={0.2}>
              <div
                style={{
                  marginBottom: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  { icon: "📚", text: "Library Management System" },
                  { icon: "👥", text: "Employee Management System" },
                  { icon: "🌐", text: "Business Websites & Landing Pages" },
                ].map((item) => (
                  <div
                    key={item.text}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      background: "rgba(124,58,237,0.07)",
                      border: "1px solid rgba(124,58,237,0.15)",
                      fontSize: "0.9rem",
                      color: "#d1d5db",
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </FadeInWhenVisible>

            {/* Tech Stack Pills */}
            <FadeInWhenVisible direction="right" delay={0.3}>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#6b7280",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                  fontWeight: 600,
                }}
              >
                Tech Stack
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 14px",
                      borderRadius: "50px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontSize: "0.85rem",
                      color: "#d1d5db",
                      fontWeight: 500,
                      cursor: "default",
                    }}
                  >
                    <span>{tech.icon}</span>
                    {tech.label}
                  </motion.div>
                ))}
              </div>
            </FadeInWhenVisible>
          </div>

          {/* RIGHT — Skill Bars */}
          <div>
            <FadeInWhenVisible direction="left" delay={0.1}>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#6b7280",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "28px",
                  fontWeight: 600,
                }}
              >
                Skills & Expertise
              </p>
            </FadeInWhenVisible>

            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}

            {/* CTA inside about */}
            <FadeInWhenVisible direction="left" delay={0.4}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "36px",
                  padding: "14px 30px",
                  borderRadius: "50px",
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  boxShadow: "0 0 28px rgba(124,58,237,0.35)",
                }}
              >
                Let's Work Together 🚀
              </motion.a>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;