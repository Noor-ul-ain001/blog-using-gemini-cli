"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-b from-background via-muted/40 to-background overflow-hidden"
    >
      {/* Decorative gradient circle */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-foreground sm:text-5xl">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              The Blog
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Welcome to our digital hub, where curiosity meets innovation. This
            blog is your gateway to understanding the **AI Revolution** — a
            movement redefining how we live, work, and create. Whether you're a
            student, professional, or just an enthusiast, we aim to bridge the
            gap between complex technology and everyday life, making AI
            accessible and exciting for everyone.
          </p>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We cover everything from **machine learning breakthroughs** and
            **automation trends** to **ethical AI**, **robotics**, and
            **creativity powered by algorithms**. Each article is crafted to
            inspire meaningful thought, spark innovation, and foster awareness
            about how artificial intelligence is transforming industries across
            the globe — from healthcare and education to business and art.
          </p>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Our mission is not just to inform but to empower. We believe that
            the future belongs to those who understand and adapt to change. As
            AI continues to evolve, it brings endless opportunities — and
            challenges. Through this platform, we invite you to explore, learn,
            and be part of this transformative journey toward a smarter,
            more-connected world.
          </p>

          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            <a
              href="#blog"
              className="px-8 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Explore Blog Posts
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full text-sm font-medium border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
