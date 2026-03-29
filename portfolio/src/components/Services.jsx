import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "🌐",
    title: "Website Development",
    description:
      "Clean, fast, and fully responsive websites built to convert visitors into customers.",
    features: [
      "Business Websites",
      "Landing Pages",
      "E-commerce Stores",
      "Fast & SEO Optimized",
    ],
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.25)",
    border: "rgba(124,58,237,0.25)",
    tag: "Most Popular 🔥",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Modern, mobile-first interfaces that look stunning and feel effortless to use.",
    features: [
      "Clean Modern Design",
      "Mobile-First UI",
      "Figma Prototypes",
      "Brand Identity",
    ],
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.25)",
    border: "rgba(6,182,212,0.25)",
    tag: null,
  },
  {
    icon: "⚙️",
    title: "Full Stack Apps",
    description:
      "End-to-end MERN applications with robust backends, dashboards, and API integrations.",
    features: [
      "MERN Stack Apps",
      "Admin Dashboards",
      "REST API Integration",
      "Database Design",
    ],
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.25)",
    border: "rgba(245,158,11,0.25)",
    tag: null,
  },
];

const FadeInWhenVisible = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: direction === "up" ? 40 : 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.02 }}
      style={{
        position: "relative",
        borderRadius: "24px",
        padding: "36px 32px",
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${service.border}`,
        backdropFilter: "blur(12px)",
        cursor: "default",
        overflow: "hidden",
        transition: "box-shadow 0.4s ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = `0 0 50px ${service.glow}`)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "none")
      }
    >
      {/* Top glow blob */}
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${service.glow} 0%, transparent 70%)`,
          filter: "blur(30px)",
          pointerEvents: "none",
        }}
      />

      {/* Popular tag */}
      {service.tag && (
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            padding: "4px 12px",
            borderRadius: "50px",
            background: "rgba(124,58,237,0.15)",
            border: "1px solid rgba(124,58,237,0.3)",
            fontSize: "0.72rem",
            fontWeight: 600,
            color: "#a78bfa",
          }}
        >
          {service.tag}
        </div>
      )}

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
        transition={{ duration: 0.5 }}
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "18px",
          background: `linear-gradient(135deg, ${service.color}22, ${service.color}11)`,
          border: `1px solid ${service.color}44`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.8rem",
          marginBottom: "24px",
        }}
      >
        {service.icon}
      </motion.div>

      {/* Title */}
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "#f1f1f1",
          marginBottom: "12px",
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "0.92rem",
          color: "#6b7280",
          lineHeight: 1.8,
          marginBottom: "28px",
        }}
      >
        {service.description}
      </p>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: `linear-gradient(90deg, ${service.color}44, transparent)`,
          marginBottom: "24px",
        }}
      />

      {/* Feature list */}
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
        {service.features.map((feature) => (
          <li
            key={feature}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "0.88rem",
              color: "#9ca3af",
            }}
          >
            <span
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                background: `${service.color}22`,
                border: `1px solid ${service.color}55`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.65rem",
                color: service.color,
                flexShrink: 0,
              }}
            >
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Bottom CTA */}
      <motion.a
        href="#contact"
        whileHover={{ x: 4 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          marginTop: "28px",
          fontSize: "0.88rem",
          fontWeight: 600,
          color: service.color,
          textDecoration: "none",
        }}
      >
        Get Started
        <span style={{ fontSize: "1rem" }}>→</span>
      </motion.a>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      style={{
        padding: "120px 24px",
        background: "#0a0a0f",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-80px",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-60px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Section header */}
        <FadeInWhenVisible>
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#7c3aed",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              What I Offer
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                marginTop: "12px",
                letterSpacing: "-0.5px",
              }}
            >
              My{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Services
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
                maxWidth: "500px",
                margin: "20px auto 0",
                lineHeight: 1.8,
              }}
            >
              Everything you need to build a powerful online presence —
              design, development, and deployment.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px",
            marginBottom: "72px",
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom offer banner */}
        <FadeInWhenVisible delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            style={{
              borderRadius: "20px",
              padding: "36px 40px",
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(6,182,212,0.08))",
              border: "1px solid rgba(124,58,237,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "4px 14px",
                  borderRadius: "50px",
                  background: "rgba(245,158,11,0.12)",
                  border: "1px solid rgba(245,158,11,0.3)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#f59e0b",
                  marginBottom: "12px",
                  letterSpacing: "1px",
                }}
              >
                ⚡ LIMITED OFFER
              </div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#f1f1f1",
                  marginBottom: "6px",
                }}
              >
                Get your business website in just{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  ₹2999
                </span>
              </h3>
              <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>
                3 days delivery · Responsive · SEO ready · Free revisions
              </p>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "14px 32px",
                borderRadius: "50px",
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 0 30px rgba(124,58,237,0.4)",
                whiteSpace: "nowrap",
              }}
            >
              Claim Offer 🚀
            </motion.a>
          </motion.div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Services;