import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <Link href={"/"}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold cursor-pointer"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-white"
        >
          uni
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[#A3FF50]"
        >
          chain
        </motion.span>
      </motion.h2>
    </Link>
  );
};

export default Logo;
