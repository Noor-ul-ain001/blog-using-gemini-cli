"use client";

import { MDXRemote } from "next-mdx-remote/rsc";
import { motion } from "framer-motion";

interface BlogPostProps {
  source: string;
  title?: string;
  author?: string;
  date?: string;
  coverImage?: string;
}

const BlogPost = ({ source, title, author, date, coverImage }: BlogPostProps) => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/40 to-background min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Blog Header */}
        {(title || author || date || coverImage) && (
          <div className="text-center mb-12">
            {coverImage && (
              <img
                src={coverImage}
                alt={title}
                className="w-full h-80 object-cover rounded-2xl mb-8 shadow-md"
              />
            )}
            {title && (
              <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4 leading-tight">
                {title}
              </h1>
            )}
            {(author || date) && (
              <p className="text-muted-foreground text-sm">
                {author && <span>By {author}</span>}{" "}
                {author && date && <span className="mx-2">•</span>}
                {date && <span>{date}</span>}
              </p>
            )}
          </div>
        )}

        {/* Blog Body */}
        <article className="prose prose-lg dark:prose-invert max-w-none leading-relaxed prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-blue-500 hover:prose-a:text-blue-600 prose-img:rounded-xl prose-img:shadow-md prose-blockquote:border-l-4 prose-blockquote:border-blue-500/60 prose-blockquote:bg-muted/30 prose-blockquote:py-1 prose-blockquote:px-4 prose-strong:text-foreground prose-code:bg-muted/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md">
          <MDXRemote source={source} />
        </article>
      </motion.div>
    </section>
  );
};

export default BlogPost;
