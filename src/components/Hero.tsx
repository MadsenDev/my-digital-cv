"use client";

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white flex items-center justify-center">
      {/* Fast bakgrunnsbilde/-mønster */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10 bg-fixed"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Velkommen til min digitale CV
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Oppdag mine ferdigheter, erfaringer og prosjekter mens du utforsker. Scroll ned for å lære mer om meg!
        </p>
        <a
          href="#about"
          className="mt-8 inline-block bg-primary hover:bg-primaryHover transition-colors text-white py-3 px-8 rounded-full text-lg"
        >
          Lær mer
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;