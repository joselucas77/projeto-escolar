import React from "react";
import { motion } from "framer-motion";

interface Props {
  content: React.ReactNode;
}

function DropToast({ content }: Props) {
  return (
    <motion.div
      initial={{ y: -1000, opacity: 0 }}
      animate={{ y: -280, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-[100]"
    >
      {content}
    </motion.div>
  );
}

export default DropToast;
