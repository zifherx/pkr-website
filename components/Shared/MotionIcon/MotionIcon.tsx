import { motion } from "framer-motion";

import { tMotionIcon } from "@/types";

export function MotionIcon({
  icon: Icon,
  colorIcon,
  scaleHover,
  scaleTap,
  sizeIcon,
}: tMotionIcon) {
  return (
    <motion.div
      whileHover={{ scale: scaleHover }}
      whileTap={{ scale: scaleTap }}
    >
      <Icon className={`h-${sizeIcon} w-${sizeIcon} text-${colorIcon}`} />
    </motion.div>
  );
}
