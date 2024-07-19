"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const Framer = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname();

  const onExit = () => {
    console.log("왜안되냐고");
  };

  return (
    <>
      <AnimatePresence mode="wait" initial={false} onExitComplete={onExit}>
        <motion.div
          key={pathName}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Framer;
