import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allProjects } from "@/data/projects";

const ProjectsPage = () => {
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
              All <span className="gradient-text">Projects</span>
            </h1>
            <div className="w-16 h-1 gradient-bg rounded-full mb-4" />
            <p className="text-muted-foreground mb-12 max-w-xl">
              A collection of things I've built — from mobile apps to security tools.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-hover rounded-xl overflow-hidden group"
              >
                <div className="h-40 gradient-bg-hover flex items-center justify-center">
                  <span className="text-4xl">{project.emoji}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono px-2 py-1 rounded-md bg-muted text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
