import { motion, AnimatePresence } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          background: "#0a0a0f",
          minHeight: "100vh",
          width: "100%",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          position: "relative",        // ← keeps it in flow, no rogue gaps
          overflowX: "hidden",         // ← prevents horizontal bleed
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;