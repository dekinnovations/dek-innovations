import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface IServiceBoxProps {
  title: string;
  description: string;
}

const ServiceBox: React.FC<IServiceBoxProps> = ({ title, description }) => {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.0 }
    },
  };

  const whileHover = {
    scale: 1.05,
    transition: { duration: 0.2 },
  };

  return (
    <Link href="/services">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={variants}
        whileHover={whileHover}
        className="w-full md:w-4/5 lg:w-3/4 xl:w-80% mx-auto bg-gradient-to-r from-blue-600 to-blue-400 text-white p-4 rounded-lg cursor-pointer shadow-lg"
        style={{ maxWidth: '80%' }}
      >
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="pt-2 text-white p-4 rounded-lg">
          {description}
        </p>
      </motion.div>
    </Link>
  );
};

export default ServiceBox;
