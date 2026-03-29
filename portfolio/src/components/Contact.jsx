import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const contactInfo = [
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+91 70420 42792",
    sub: "Quick response within minutes",
    color: "#25d366",
    glow: "rgba(37,211,102,0.2)",
    href: "https://wa.me/7042043792",
  },
  {
    icon: "📧",
    label: "Email",
    value: "prashantkumar4216@gmail.com",
    sub: "Reply within 24 hours",
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.2)",
    href: "mailto:prashantkumar4216@gmail.com",
  },
  {
    icon: "📍",
    label: "Location",
    value: "India (Remote)",
    sub: "Available worldwide",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.2)",
    href: null,
  },
];

const socialLinks = [
  { icon: "🐙", label: "GitHub", href: "https://github.com/PrashantKumar-5014", color: "#f1f1f1" },
  { icon: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/prashant-kumar-68408331b/", color: "#0a66c2" },
  { icon: "🐦", label: "Twitter", href: "https://twitter.com", color: "#1da1f2" },
  { icon: "📸", label: "Instagram", href: "https://www.instagram.com/prashaant_09/", color: "#e1306c" },
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

const InputField = ({ label, type = "text", placeholder, value, onChange, name }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: "20px" }}>
      <label
        style={{
          display: "block",
          fontSize: "0.82rem",
          fontWeight: 600,
          color: focused ? "#a78bfa" : "#6b7280",
          marginBottom: "8px",
          letterSpacing: "0.5px",
          transition: "color 0.3s ease",
        }}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={5}
          style={{
            width: "100%",
            padding: "14px 18px",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.04)",
            border: `1px solid ${focused ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.08)"}`,
            color: "#f1f1f1",
            fontSize: "0.92rem",
            fontFamily: "Poppins, sans-serif",
            outline: "none",
            resize: "vertical",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            boxShadow: focused ? "0 0 0 3px rgba(124,58,237,0.1)" : "none",
          }}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            padding: "14px 18px",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.04)",
            border: `1px solid ${focused ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.08)"}`,
            color: "#f1f1f1",
            fontSize: "0.92rem",
            fontFamily: "Poppins, sans-serif",
            outline: "none",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            boxShadow: focused ? "0 0 0 3px rgba(124,58,237,0.1)" : "none",
          }}
        />
      )}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) return;
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1800));
    setSending(false);
    setSent(true);
    setFormData({ name: "", email: "", budget: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
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
          top: "10%",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
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
              Get In Touch
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                marginTop: "12px",
                letterSpacing: "-0.5px",
              }}
            >
              Let's Build Something{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Amazing
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
              Have a project in mind? Let's talk. I'm always open to
              discussing new opportunities.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "48px",
            alignItems: "start",
          }}
        >

          {/* LEFT — Info */}
          <div>

            {/* WhatsApp CTA — BIG */}
            <FadeInWhenVisible direction="right" delay={0.1}>
              <motion.a
                href="https://wa.me/917042043792"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "24px 28px",
                  borderRadius: "20px",
                  background:
                    "linear-gradient(135deg, rgba(37,211,102,0.12), rgba(37,211,102,0.06))",
                  border: "1px solid rgba(37,211,102,0.25)",
                  textDecoration: "none",
                  marginBottom: "20px",
                  boxShadow: "0 0 0 rgba(37,211,102,0)",
                  transition: "box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 40px rgba(37,211,102,0.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 0 rgba(37,211,102,0)")
                }
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: "rgba(37,211,102,0.15)",
                    border: "1px solid rgba(37,211,102,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.6rem",
                    flexShrink: 0,
                  }}
                >
                  💬
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#25d366",
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    Fastest Response
                  </div>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#f1f1f1",
                      marginBottom: "2px",
                    }}
                  >
                    Message on WhatsApp
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#6b7280" }}>
                    Usually replies within minutes ⚡
                  </div>
                </div>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ fontSize: "1.2rem", color: "#25d366" }}
                >
                  →
                </motion.span>
              </motion.a>
            </FadeInWhenVisible>

            {/* Contact info cards */}
            {contactInfo.map((item, i) => (
              <FadeInWhenVisible key={item.label} direction="right" delay={0.15 + i * 0.1}>
                {item.href ? (
                  <motion.a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noreferrer"
                    whileHover={{ x: 6 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "18px 20px",
                      borderRadius: "16px",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      textDecoration: "none",
                      marginBottom: "12px",
                      transition: "background 0.3s ease, border-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${item.color}0a`;
                      e.currentTarget.style.borderColor = `${item.color}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.72rem",
                          color: item.color,
                          fontWeight: 600,
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          marginBottom: "2px",
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.92rem",
                          fontWeight: 600,
                          color: "#d1d5db",
                        }}
                      >
                        {item.value}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#4b5563" }}>
                        {item.sub}
                      </div>
                    </div>
                  </motion.a>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "18px 20px",
                      borderRadius: "16px",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      marginBottom: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.72rem",
                          color: item.color,
                          fontWeight: 600,
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          marginBottom: "2px",
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.92rem",
                          fontWeight: 600,
                          color: "#d1d5db",
                        }}
                      >
                        {item.value}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#4b5563" }}>
                        {item.sub}
                      </div>
                    </div>
                  </div>
                )}
              </FadeInWhenVisible>
            ))}

            {/* Social Links */}
            <FadeInWhenVisible direction="right" delay={0.4}>
              <div style={{ marginTop: "28px" }}>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#4b5563",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: "14px",
                  }}
                >
                  Find Me On
                </p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {socialLinks.map((s, i) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        padding: "9px 16px",
                        borderRadius: "50px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        textDecoration: "none",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "#9ca3af",
                        transition: "color 0.3s ease, border-color 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = s.color;
                        e.currentTarget.style.borderColor = `${s.color}44`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#9ca3af";
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.08)";
                      }}
                    >
                      {s.icon} {s.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>
          </div>

          {/* RIGHT — Contact Form */}
          <FadeInWhenVisible direction="left" delay={0.2}>
            <div
              style={{
                borderRadius: "24px",
                padding: "36px 32px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Form top glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-60px",
                  right: "-60px",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
                  filter: "blur(30px)",
                  pointerEvents: "none",
                }}
              />

              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#f1f1f1",
                  marginBottom: "8px",
                }}
              >
                Send Me a Message 📨
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#4b5563",
                  marginBottom: "28px",
                }}
              >
                Fill the form below and I'll get back to you shortly.
              </p>

              {/* Form fields */}
              <InputField
                label="Your Name *"
                name="name"
                placeholder="Rahul Sharma"
                value={formData.name}
                onChange={handleChange}
              />
              <InputField
                label="Email Address *"
                name="email"
                type="email"
                placeholder="rahul@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />

              {/* Budget select */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "#6b7280",
                    marginBottom: "8px",
                    letterSpacing: "0.5px",
                  }}
                >
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    borderRadius: "14px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: formData.budget ? "#f1f1f1" : "#6b7280",
                    fontSize: "0.92rem",
                    fontFamily: "Poppins, sans-serif",
                    outline: "none",
                    cursor: "none",
                    appearance: "none",
                  }}
                >
                  <option value="" style={{ background: "#12121a" }}>
                    Select your budget
                  </option>
                  <option value="basic" style={{ background: "#12121a" }}>
                    ₹999 – ₹2999 (Basic Website)
                  </option>
                  <option value="standard" style={{ background: "#12121a" }}>
                    ₹3000 – ₹7999 (Standard)
                  </option>
                  <option value="premium" style={{ background: "#12121a" }}>
                    ₹8000 – ₹15000 (Premium)
                  </option>
                  <option value="enterprise" style={{ background: "#12121a" }}>
                    ₹15000+ (Full Stack App)
                  </option>
                </select>
              </div>

              <InputField
                label="Your Message *"
                name="message"
                type="textarea"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
              />

              {/* Submit button */}
              <motion.button
                onClick={handleSubmit}
                disabled={sending || sent}
                whileHover={!sending && !sent ? { scale: 1.02, y: -2 } : {}}
                whileTap={!sending && !sent ? { scale: 0.97 } : {}}
                style={{
                  width: "100%",
                  padding: "15px",
                  borderRadius: "14px",
                  border: "none",
                  cursor: sending || sent ? "default" : "none",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.97rem",
                  color: "#fff",
                  background: sent
                    ? "linear-gradient(135deg, #10b981, #059669)"
                    : "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  boxShadow: sent
                    ? "0 0 30px rgba(16,185,129,0.35)"
                    : "0 0 30px rgba(124,58,237,0.35)",
                  transition: "background 0.4s ease, box-shadow 0.4s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                {sending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      style={{
                        width: "18px",
                        height: "18px",
                        border: "2px solid rgba(255,255,255,0.3)",
                        borderTopColor: "#fff",
                        borderRadius: "50%",
                      }}
                    />
                    Sending...
                  </>
                ) : sent ? (
                  <>✅ Message Sent! I'll reply soon</>
                ) : (
                  <>Send Message 🚀</>
                )}
              </motion.button>

              {/* Bottom note */}
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.75rem",
                  color: "#374151",
                  marginTop: "16px",
                }}
              >
                🔒 Your information is 100% secure and private
              </p>
            </div>
          </FadeInWhenVisible>
        </div>

        {/* Availability banner */}
        <FadeInWhenVisible delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            style={{
              marginTop: "72px",
              borderRadius: "20px",
              padding: "28px 36px",
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.07))",
              border: "1px solid rgba(124,58,237,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 12px #22c55e",
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#f1f1f1",
                    marginBottom: "2px",
                  }}
                >
                  Currently Available for New Projects
                </div>
                <div style={{ fontSize: "0.82rem", color: "#6b7280" }}>
                  ⚡ Limited Offer — Business website in just ₹2999 · 3 days delivery
                </div>
              </div>
            </div>
            <motion.a
              href="https://wa.me/917042043792"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "12px 28px",
                borderRadius: "50px",
                background: "linear-gradient(135deg, #25d366, #128c7e)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.9rem",
                textDecoration: "none",
                boxShadow: "0 0 24px rgba(37,211,102,0.35)",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              💬 WhatsApp Now
            </motion.a>
          </motion.div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default Contact;