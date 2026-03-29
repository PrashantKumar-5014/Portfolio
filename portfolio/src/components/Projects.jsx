import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Restaurant Website",
    description:
      "A modern restaurant website with online menu, smooth animations, and contact form. Built for real businesses.",
    tags: ["React", "Tailwind", "Node.js"],
    icon: "🍽️",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.2)",
    border: "rgba(245,158,11,0.2)",
    features: ["Online Menu", "Contact Form", "Mobile Responsive"],
    liveLink: "#",
    githubLink: "#",
    status: "Live",
  },
  {
    title: "Gym Website",
    description:
      "High-converting gym landing page with membership plans, trainer profiles, and smooth scroll animations.",
    tags: ["React", "Framer Motion", "CSS"],
    icon: "💪",
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.2)",
    border: "rgba(124,58,237,0.2)",
    features: ["Membership Plans", "Trainer Profiles", "Animations"],
    liveLink: "#",
    githubLink: "#",
    status: "Live",
  },
  {
    title: "Library Management System",
    description:
      "Full stack app to manage books, members, and issue records with admin dashboard and authentication.",
    tags: ["MERN Stack", "JWT", "MongoDB"],
    icon: "📚",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.2)",
    border: "rgba(6,182,212,0.2)",
    features: ["Admin Dashboard", "Auth System", "CRUD Operations"],
    liveLink: "#",
    githubLink: "#",
    status: "Full Stack",
  },
  {
    title: "Employee Management System",
    description:
      "MERN app with role-based access, employee records, attendance tracking, and analytics dashboard.",
    tags: ["MERN Stack", "Redux", "Express"],
    icon: "👥",
    color: "#10b981",
    glow: "rgba(16,185,129,0.2)",
    border: "rgba(16,185,129,0.2)",
    features: ["Role Based Access", "Attendance Track", "Analytics"],
    liveLink: "#",
    githubLink: "#",
    status: "Full Stack",
  },
  {
    title: "E-Commerce Store",
    description:
      "Modern online store with product listings, cart system, payment integration and order tracking.",
    tags: ["React", "Node.js", "Stripe"],
    icon: "🛒",
    color: "#f43f5e",
    glow: "rgba(244,63,94,0.2)",
    border: "rgba(244,63,94,0.2)",
    features: ["Cart System", "Payment Gateway", "Order Tracking"],
    liveLink: "#",
    githubLink: "#",
    status: "In Progress",
  },
  {
    title: "Portfolio Website",
    description:
      "This very portfolio — built with React, Framer Motion, custom cursor, typed.js and smooth scroll animations.",
    tags: ["React", "Framer Motion", "Vite"],
    icon: "🚀",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.2)",
    border: "rgba(139,92,246,0.2)",
    features: ["Framer Motion", "Custom Cursor", "Typed.js"],
    liveLink: "#",
    githubLink: "#",
    status: "Live",
  },
];

const statusColors = {
  Live: { bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.3)", color: "#10b981" },
  "Full Stack": { bg: "rgba(6,182,212,0.12)", border: "rgba(6,182,212,0.3)", color: "#06b6d4" },
  "In Progress": { bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.3)", color: "#f59e0b" },
};

const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  const status = statusColors[project.status];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative" }}
    >
      <motion.div
        animate={{ y: hovered ? -8 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          borderRadius: "24px",
          overflow: "hidden",
          background: "rgba(255,255,255,0.02)",
          border: `1px solid ${hovered ? project.border : "rgba(255,255,255,0.07)"}`,
          boxShadow: hovered ? `0 20px 60px ${project.glow}` : "none",
          transition: "border 0.3s ease, box-shadow 0.3s ease",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Card top image area */}
        <div
          style={{
            height: "180px",
            background: `linear-gradient(135deg, ${project.color}18, ${project.color}08)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Grid pattern inside card */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `
                linear-gradient(${project.color}15 1px, transparent 1px),
                linear-gradient(90deg, ${project.color}15 1px, transparent 1px)
              `,
              backgroundSize: "30px 30px",
            }}
          />

          {/* Glow circle behind icon */}
          <div
            style={{
              position: "absolute",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${project.glow} 0%, transparent 70%)`,
              filter: "blur(20px)",
            }}
          />

          {/* Big icon */}
          <motion.div
            animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              fontSize: "4rem",
              position: "relative",
              zIndex: 1,
              filter: "drop-shadow(0 0 20px rgba(0,0,0,0.5))",
            }}
          >
            {project.icon}
          </motion.div>

          {/* Status badge */}
          <div
            style={{
              position: "absolute",
              top: "14px",
              right: "14px",
              padding: "4px 12px",
              borderRadius: "50px",
              background: status.bg,
              border: `1px solid ${status.border}`,
              fontSize: "0.72rem",
              fontWeight: 700,
              color: status.color,
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: status.color,
                boxShadow: `0 0 6px ${status.color}`,
                display: "inline-block",
              }}
            />
            {project.status}
          </div>
        </div>

        {/* Card body */}
        <div
          style={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          {/* Title */}
          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 700,
              color: "#f1f1f1",
              marginBottom: "10px",
            }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: "0.88rem",
              color: "#6b7280",
              lineHeight: 1.75,
              marginBottom: "20px",
              flex: 1,
            }}
          >
            {project.description}
          </p>

          {/* Features */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            {project.features.map((f) => (
              <span
                key={f}
                style={{
                  padding: "4px 10px",
                  borderRadius: "6px",
                  background: `${project.color}12`,
                  border: `1px solid ${project.color}30`,
                  fontSize: "0.75rem",
                  color: project.color,
                  fontWeight: 500,
                }}
              >
                {f}
              </span>
            ))}
          </div>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              marginBottom: "20px",
            }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "3px 10px",
                  borderRadius: "50px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontSize: "0.72rem",
                  color: "#9ca3af",
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background: `linear-gradient(90deg, ${project.color}33, transparent)`,
              marginBottom: "20px",
            }}
          />

          {/* Action buttons */}
          <div style={{ display: "flex", gap: "12px" }}>
            <motion.a
              href={project.liveLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "12px",
                background: `linear-gradient(135deg, ${project.color}cc, ${project.color}88)`,
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.82rem",
                textDecoration: "none",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              🔗 Live Demo
            </motion.a>

            <motion.a
              href={project.githubLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#9ca3af",
                fontWeight: 600,
                fontSize: "0.82rem",
                textDecoration: "none",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                transition: "color 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#f1f1f1";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#9ca3af";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              }}
            >
              🐙 GitHub
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "React", "MERN Stack", "Full Stack"];

  const filtered =
    filter === "All"
      ? projects
      : projects.filter(
          (p) =>
            p.tags.some((t) => t.includes(filter)) ||
            p.features.some((f) => f.toLowerCase().includes(filter.toLowerCase()))
        );

  return (
    <section
      id="projects"
      style={{
        padding: "120px 24px",
        background: "#0d0d14",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-80px",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Section header */}
        <FadeInWhenVisible>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#7c3aed",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              My Work
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                marginTop: "12px",
                letterSpacing: "-0.5px",
              }}
            >
              Featured{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Projects
              </span>
            </h2>
            <div
              style={{
                width: "60px",
                height: "3px",
                background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
                borderRadius: "999px",
                margin: "16px auto 0",
              }}
            />
            <p
              style={{
                color: "#6b7280",
                fontSize: "0.97rem",
                marginTop: "20px",
                maxWidth: "480px",
                margin: "20px auto 0",
                lineHeight: 1.8,
              }}
            >
              Real projects. Real code. Built to solve real problems.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Filter Tabs */}
        <FadeInWhenVisible delay={0.1}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "52px",
              flexWrap: "wrap",
            }}
          >
            {filters.map((f) => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "10px 24px",
                  borderRadius: "50px",
                  border: "none",
                  cursor: "none",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  transition: "all 0.3s ease",
                  background:
                    filter === f
                      ? "linear-gradient(135deg, #7c3aed, #06b6d4)"
                      : "rgba(255,255,255,0.05)",
                  color: filter === f ? "#fff" : "#6b7280",
                  boxShadow:
                    filter === f
                      ? "0 0 20px rgba(124,58,237,0.35)"
                      : "none",
                  border:
                    filter === f
                      ? "1px solid transparent"
                      : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </FadeInWhenVisible>

        {/* Projects Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
            marginBottom: "72px",
          }}
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>

        {/* Bottom GitHub CTA */}
        <FadeInWhenVisible delay={0.2}>
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                color: "#4b5563",
                fontSize: "0.9rem",
                marginBottom: "20px",
              }}
            >
              Want to see more of my work?
            </p>
            <motion.a
              href="https://github.com/PrashantKumar-5014"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 32px",
                borderRadius: "50px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#f1f1f1",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                backdropFilter: "blur(10px)",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")
              }
            >
              🐙 View All on GitHub
            </motion.a>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Projects;