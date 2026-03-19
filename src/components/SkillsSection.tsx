import { motion } from "framer-motion";

const skills = [
  { name: "Flutter", category: "dev" },
  { name: "TypeScript", category: "dev" },
  { name: "Java", category: "dev" },
  { name: "SQL", category: "dev" },
  { name: "MongoDB", category: "dev" },
  { name: "Linux", category: "ops" },
  { name: "Git", category: "ops" },
  { name: "Docker", category: "ops" },
  { name: "Cybersecurity", category: "sec" },
  { name: "Hack The Box", category: "sec" },
  { name: "TryHackMe", category: "sec" },
  { name: "CTF Player", category: "sec" },
];

const categoryColors: Record<string, string> = {
  dev: "border-primary/30 hover:border-primary/60 hover:shadow-[0_0_20px_hsl(var(--neon-blue)/0.15)]",
  ops: "border-accent/30 hover:border-accent/60 hover:shadow-[0_0_20px_hsl(var(--neon-purple)/0.15)]",
  sec: "border-red-500/30 hover:border-red-500/60 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]",
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-16 h-1 gradient-bg rounded-full mb-12" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className={`glass rounded-xl p-5 border transition-all duration-300 cursor-default ${categoryColors[skill.category]}`}
              >
                <span className="font-mono text-sm font-medium text-foreground">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
