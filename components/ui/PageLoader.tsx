"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader({ isLoading }: { isLoading: boolean }) {
  const [show, setShow] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShow(true);
      const timer = setTimeout(() => setShow(false), 2500); // يفضل 2.5 ثانية
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9998] bg-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative text-center">
            {/* الاسم كأنه جردل شفاف */}
            <motion.div className="relative text-[5rem] font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/5">
              SH8B
              {/* السائل اللي بيتملي */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-cyan-400/80 to-blue-500/60 rounded-md overflow-hidden"
                style={{ clipPath: "text" }}
                initial={{ height: "0%" }}
                animate={{ height: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.div>

            {/* رش وطرطشة حوالين الاسم */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
            >
              <div className="w-[10rem] h-[10rem] bg-cyan-400/20 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
