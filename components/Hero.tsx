"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center text-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/7661264/pexels-photo-7661264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background/80" />

      {/* Decorative animated gradient orb */}
      <div className="absolute top-1/3 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-30 animate-pulse" />

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black tracking-tight leading-tight"
        >
          The{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            AI Revolution
          </span>
          : How Artificial Intelligence Is Reshaping Our World
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500"
        >
          Dive into the evolving world of Artificial Intelligence — from
          innovation to impact — and explore how it’s transforming industries,
          creativity, and everyday life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/blog"
            className="px-8 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Read The Blog
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
