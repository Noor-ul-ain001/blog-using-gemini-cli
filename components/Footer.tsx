"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background via-muted/30 to-background border-t border-border overflow-hidden">
      {/* Soft glow */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center"
      >
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-blue-500 transition-colors duration-300"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-blue-600 transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-purple-600 transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@airevolution.com"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} <span className="font-semibold">The AI Revolution</span>. All rights reserved.
        </p>

        {/* Tagline */}
        <p className="mt-2 text-xs text-muted-foreground/70">
          Empowering the future — one algorithm at a time.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
