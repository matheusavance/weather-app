import { motion } from 'framer-motion';

function FailMessage({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-white border-1 border-[#C94739] rounded-xl p-3 bg-[#C94739]"
    >
      <div className="first-letter:uppercase font-mediums">{data}.</div>
    </motion.div>
  );
}

export default FailMessage;
