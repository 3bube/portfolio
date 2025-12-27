import { motion } from "motion/react";

export function BorderBeam({
  duration = 4,
  delay = 0,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
}) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 rounded-[inherit]"
      style={{
        background: `conic-gradient(from 0deg, transparent 0deg, ${colorFrom} 90deg, ${colorTo} 180deg, transparent 270deg)`,
        maskImage: "linear-gradient(transparent, transparent)",
        WebkitMaskImage: "linear-gradient(transparent, transparent)",
      }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}
