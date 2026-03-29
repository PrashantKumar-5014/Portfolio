import { motion, useInView, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Restaurant Owner",
    location: "Delhi, India",
    avatar: "👨‍🍳",
    rating: 5,
    color: "#f59e0b",
    text: "Prashant built our restaurant website in just 2 days. The design is stunning and our online orders have increased significantly. Very professional and responsive throughout the process!",
  },
  {
    name: "Priya Mehta",
    role: "Startup Founder",
    location: "Mumbai, India",
    avatar: "👩‍💼",
    rating: 5,
    color: "#7c3aed",
    text: "Absolutely loved working with Prashant. He understood our vision perfectly and delivered a website that truly represents our brand. Clean code, great design, fast delivery!",
  },
  {
    name: "Amit Verma",
    role: "Gym Owner",
    location: "Bangalore, India",
    avatar: "🏋️",
    rating: 5,
    color: "#06b6d4",
    text: "Our gym membership sign-ups doubled after the new website went live. Prashant's work is top notch — modern design, smooth animations, and works perfectly on mobile.",
  },
  {
    name: "Sneha Patel",
    role: "E-commerce Business",
    location: "Ahmedabad, India",
    avatar: "👩‍🛒",
    rating: 5,
    color: "#10b981",
    text: "Very talented developer. Delivered our e-commerce store ahead of schedule with all features working perfectly. Will definitely hire again for future projects!",
  },
  {
    name: "Rohit Kumar",
    role: "Tech Startup CTO",
    location: "Hyderabad, India",
    avatar: "👨‍💻",
    rating: 5,
    color: "#f43f5e",
    text: "Prashant built our entire MERN stack dashboard from scratch. Excellent knowledge of React and Node.js. The code quality is clean and well structured. Highly recommended!",
  },
  {
    name: "Anjali Singh",
    role: "Fashion Brand Owner",
    location: "Jaipur, India",
    avatar: "👗",
    rating: 5,
    color: "#8b5cf6",
    text: "Our fashion website looks absolutely gorgeous. Prashant has an amazing eye for design. Every detail was pixel perfect. Our customers love the new look!",
  },
];

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

const StarRating = ({ rating, color }) => (
  <div style={{ display: "flex", gap: "3px", marginBottom: "16px" }}>
    {Array.from({ length: rating }).map((_, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08 }}
        style={{ fontSize: "0.9rem", color: color }}
      >
        ★
      </motion.span>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, style = {} }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    style={{
      minWidth: "320px",
      maxWidth: "320px",
      borderRadius: "20px",
      padding: "28px",
      background: "rgba(255,255,255,0.03)",
      border: `1px solid rgba(255,255,255,0.07)`,
      backdropFilter: "blur(12px)",
      cursor: "default",
      position: "relative",
      overflow: "hidden",
      transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      ...style,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = `0 20px 50px ${testimonial.color}22`;
      e.currentTarget.style.borderColor = `${testimonial.color}33`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
    }}
  >
    {/* Quote mark */}
    <div
      style={{
        position: "absolute",
        top: "16px",
        right: "20px",
        fontSize: "4rem",
        lineHeight: 1,
        color: `${testimonial.color}18`,
        fontFamily: "Georgia, serif",
        userSelect: "none",
      }}
    >
      "
    </div>

    {/* Top glow */}
    <div
      style={{
        position: "absolute",
        top: "-30px",
        left: "-30px",
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${testimonial.color}15 0%, transparent 70%)`,
        filter: "blur(20px)",
        pointerEvents: "none",
      }}
    />

    {/* Stars */}
    <StarRating rating={testimonial.rating} color={testimonial.color} />

    {/* Review text */}
    <p
      style={{
        fontSize: "0.9rem",
        color: "#9ca3af",
        lineHeight: 1.85,
        marginBottom: "24px",
        position: "relative",
        zIndex: 1,
      }}
    >
      "{testimonial.text}"
    </p>

    {/* Divider */}
    <div
      style={{
        height: "1px",
        background: `linear-gradient(90deg, ${testimonial.color}33, transparent)`,
        marginBottom: "20px",
      }}
    />

    {/* Author */}
    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
      {/* Avatar */}
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${testimonial.color}22, ${testimonial.color}11)`,
          border: `2px solid ${testimonial.color}44`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.4rem",
          flexShrink: 0,
        }}
      >
        {testimonial.avatar}
      </div>

      {/* Name + role */}
      <div>
        <div
          style={{
            fontSize: "0.95rem",
            fontWeight: 700,
            color: "#f1f1f1",
            marginBottom: "2px",
          }}
        >
          {testimonial.name}
        </div>
        <div
          style={{
            fontSize: "0.78rem",
            color: testimonial.color,
            fontWeight: 500,
          }}
        >
          {testimonial.role}
        </div>
        <div
          style={{
            fontSize: "0.72rem",
            color: "#4b5563",
            marginTop: "1px",
          }}
        >
          📍 {testimonial.location}
        </div>
      </div>

      {/* Verified badge */}
      <div
        style={{
          marginLeft: "auto",
          padding: "3px 10px",
          borderRadius: "50px",
          background: "rgba(16,185,129,0.1)",
          border: "1px solid rgba(16,185,129,0.25)",
          fontSize: "0.65rem",
          fontWeight: 700,
          color: "#10b981",
          whiteSpace: "nowrap",
        }}
      >
        ✓ Verified
      </div>
    </div>
  </motion.div>
);

// Auto scrolling row
const MarqueeRow = ({ items, direction = 1, speed = 30 }) => {
  const trackRef = useRef(null);
  const xRef = useRef(0);

  useAnimationFrame((_, delta) => {
    if (!trackRef.current) return;
    xRef.current -= (speed * direction * delta) / 1000;
    const totalWidth = trackRef.current.scrollWidth / 2;
    if (Math.abs(xRef.current) >= totalWidth) xRef.current = 0;
    trackRef.current.style.transform = `translateX(${xRef.current}px)`;
  });

  return (
    <div style={{ overflow: "hidden", width: "100%", position: "relative" }}>
      {/* Left fade */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "120px",
          background:
            "linear-gradient(90deg, #0d0d14 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      {/* Right fade */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "120px",
          background:
            "linear-gradient(270deg, #0d0d14 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: "20px",
          width: "max-content",
          willChange: "transform",
        }}
      >
        {/* Duplicate for seamless loop */}
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 6);

  return (
    <section
      id="testimonials"
      style={{
        padding: "120px 0",
        background: "#0a0a0f",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Section header */}
      <div style={{ padding: "0 24px", maxWidth: "1100px", margin: "0 auto" }}>
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
              Client Reviews
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                marginTop: "12px",
                letterSpacing: "-0.5px",
              }}
            >
              What Clients{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Say
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
              Don't just take my word for it — hear from the businesses
              I've helped grow online.
            </p>

            {/* Overall rating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                marginTop: "28px",
                padding: "12px 24px",
                borderRadius: "50px",
                background: "rgba(245,158,11,0.08)",
                border: "1px solid rgba(245,158,11,0.2)",
              }}
            >
              <div style={{ display: "flex", gap: "2px" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: "#f59e0b", fontSize: "1rem" }}>
                    ★
                  </span>
                ))}
              </div>
              <span
                style={{
                  fontSize: "0.9rem",
                  color: "#d1d5db",
                  fontWeight: 600,
                }}
              >
                5.0 / 5.0
              </span>
              <span
                style={{
                  fontSize: "0.82rem",
                  color: "#6b7280",
                }}
              >
                from 15+ happy clients
              </span>
            </motion.div>
          </div>
        </FadeInWhenVisible>
      </div>

      {/* Marquee rows */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Row 1 — left to right */}
        <MarqueeRow items={row1} direction={1} speed={28} />
        {/* Row 2 — right to left */}
        <MarqueeRow items={row2} direction={-1} speed={22} />
      </div>

      {/* Bottom CTA */}
      <div style={{ padding: "0 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <FadeInWhenVisible delay={0.2}>
          <div style={{ textAlign: "center", marginTop: "72px" }}>
            <p
              style={{
                color: "#4b5563",
                fontSize: "0.9rem",
                marginBottom: "20px",
              }}
            >
              Ready to be the next success story?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 36px",
                borderRadius: "50px",
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 0 30px rgba(124,58,237,0.4)",
              }}
            >
              Start Your Project 🚀
            </motion.a>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Testimonials;