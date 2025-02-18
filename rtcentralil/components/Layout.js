import { motion } from 'framer-motion';

export default function Layout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, border: '5px solid red' }}
      animate={{ opacity: 1, border: '5px solid transparent' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}