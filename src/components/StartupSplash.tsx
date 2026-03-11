import { motion, AnimatePresence } from "framer-motion";

interface StartupSplashProps {
  visible: boolean;
}

export default function StartupSplash({ visible }: StartupSplashProps) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="startup-splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
        >
          <div className="startup-splash__glow" aria-hidden="true" />
          <motion.div
            className="startup-splash__card"
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.04, y: -12, transition: { duration: 0.35 } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src="/logo.png"
              alt="Asili360 logo"
              className="startup-splash__logo"
              initial={{ opacity: 0, scale: 0.82, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.p
              className="startup-splash__label"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Discover the essence of Kenya
            </motion.p>
            <motion.div
              className="startup-splash__bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.45, duration: 1.1, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
