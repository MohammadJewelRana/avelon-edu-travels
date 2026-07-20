import { motion } from "framer-motion";

type SectionHeaderProps = {
  badge: string;
  title: string;
  description?: string;
  center?: boolean;
};

const SectionHeader = ({
  badge,
  title,
  description,
  center = true,
}: SectionHeaderProps) => {
  return (
    <div
      className={`mx-auto mb-12 max-w-3xl ${
        center ? "text-center" : "text-left"
      }`}
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className={`mb-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 shadow-sm`}
      >
        <span className="h-2 w-2 rounded-full bg-red-500" />
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">
          {badge}
        </span>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-2xl font-black uppercase tracking-[0.12em] text-gray-900 md:text-3xl lg:text-4xl"
      >
        {title}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;