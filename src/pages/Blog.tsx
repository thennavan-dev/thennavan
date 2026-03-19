import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Tag, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, getAllTags } from "@/data/blogs";

const categoryLabel: Record<string, string> = {
  dev: "Development",
  security: "Security",
};

const BlogPage = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const allTags = getAllTags();

  const filtered = activeTag
    ? blogPosts.filter((p) => p.tags.includes(activeTag))
    : blogPosts;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">
              <span className="gradient-text">Blog</span>
            </h1>
            <div className="w-16 h-1 gradient-bg rounded-full mb-4" />
            <p className="text-muted-foreground mb-8 max-w-xl">
              Thoughts on Flutter development, cybersecurity, and everything in between.
            </p>
          </motion.div>

          {/* Tag Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            <button
              onClick={() => setActiveTag(null)}
              className={`text-xs font-mono px-3 py-1.5 rounded-lg transition-colors ${
                !activeTag
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className={`text-xs font-mono px-3 py-1.5 rounded-lg transition-colors ${
                  activeTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                #{tag}
              </button>
            ))}
          </motion.div>

          <div className="grid gap-6 max-w-3xl">
            <AnimatePresence mode="popLayout">
              {filtered.map((post, i) => (
                <motion.article
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ x: 6 }}
                >
                  <Link to={`/blog/${post.slug}`} className="block glass-hover rounded-xl p-6 group">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-md ${
                          post.category === "security"
                            ? "bg-destructive/10 text-destructive"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <Tag className="w-3 h-3" />
                        {categoryLabel[post.category]}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <time className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <div className="flex gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs font-mono text-muted-foreground">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
