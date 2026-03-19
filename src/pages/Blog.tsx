import { motion } from "framer-motion";
import { Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogs";

const categoryLabel: Record<string, string> = {
  dev: "Development",
  security: "Security",
};

const BlogPage = () => {
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
            <p className="text-muted-foreground mb-12 max-w-xl">
              Thoughts on Flutter development, cybersecurity, and everything in between.
            </p>
          </motion.div>

          <div className="grid gap-6 max-w-3xl">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ x: 6 }}
                className="glass-hover rounded-xl p-6 cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`inline-flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-md ${
                    post.category === "security" ? "bg-red-500/10 text-red-400" : "bg-primary/10 text-primary"
                  }`}>
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
                <time className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
