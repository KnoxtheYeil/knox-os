import { motion } from "framer-motion";

export default function BrookeCard({ brooke, onActivate }) {
  return (
    <motion.div
      onClick={() => onActivate(brooke.id)}
      className="glass"
      style={{ marginBottom: 12, borderLeft: `4px solid ${brooke.color}` }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={{ opacity: brooke.status === "active" ? 1 : 0.7 }}
      transition={{ duration: 0.25 }}
    >
      <h3>{brooke.name}</h3>
      <p>Status: {brooke.status}</p>
      <p>Energy: {brooke.energy}</p>
      <p>Load: {brooke.load}</p>
    </motion.div>
  );
}

