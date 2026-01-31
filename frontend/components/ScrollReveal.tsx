// components/ScrollReveal.tsx
"use client";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
}

export default function ScrollReveal({ children, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Starts invisible and 30px lower
      whileInView={{ opacity: 1, y: 0 }} // Fades in and moves up when seen
      viewport={{ once: true, margin: "-50px" }} // Triggers once when 50px into view
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