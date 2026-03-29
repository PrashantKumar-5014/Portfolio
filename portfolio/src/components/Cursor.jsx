import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Hover detection on interactive elements
    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "A" ||
        e.target.closest("button") ||
        e.target.closest("a") ||
        e.target.dataset.hover
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  // Smooth follower effect
  useEffect(() => {
    let animFrame;
    const lerp = (start, end, t) => start + (end - start) * t;

    const animate = () => {
      setFollowerPos((prev) => ({
        x: lerp(prev.x, mousePos.x, 0.1),
        y: lerp(prev.y, mousePos.y, 0.1),
      }));
      animFrame = requestAnimationFrame(animate);
    };

    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, [mousePos]);

  return (
    <>
      {/* Main dot cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: mousePos.x - 6,
          y: mousePos.y - 6,
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
      >
        <div
          className="w-3 h-3 rounded-full"
          style={{
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
          }}
        />
      </motion.div>

      {/* Outer ring follower */}
      <div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          transform: `translate(${followerPos.x - 20}px, ${followerPos.y - 20}px)`,
        }}
      >
        <div
          style={{
            width: isHovering ? "50px" : "40px",
            height: isHovering ? "50px" : "40px",
            borderRadius: "50%",
            border: isHovering
              ? "2px solid #06b6d4"
              : "2px solid rgba(124, 58, 237, 0.6)",
            transition: "width 0.3s ease, height 0.3s ease, border 0.3s ease",
            backdropFilter: isHovering ? "blur(4px)" : "none",
            background: isHovering
              ? "rgba(6, 182, 212, 0.08)"
              : "transparent",
          }}
        />
      </div>

      {/* Glow trail on hover */}
      {isHovering && (
        <div
          className="fixed top-0 left-0 z-[9997] pointer-events-none"
          style={{
            transform: `translate(${followerPos.x - 30}px, ${followerPos.y - 30}px)`,
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
            transition: "transform 0.1s ease",
          }}
        />
      )}
    </>
  );
};

export default Cursor;