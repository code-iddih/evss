"use client";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({ children, delay = 0, className = "" }: Props) {
  return (
    <motion.div
      className={className}
      // Use flex here instead of contents to preserve animation support
      style={{ display: "flex", flexDirection: "column" }} 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: delay, 
        ease: "easeOut" 
      }}
    >
      {children}
    </motion.div>
  );
}