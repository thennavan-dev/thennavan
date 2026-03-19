import { motion } from "framer-motion";
import { Code2, Shield, Terminal } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 gradient-bg rounded-full mb-8" />

          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            I'm a developer who thrives at the intersection of mobile development and cybersecurity. 
            I build performant, beautiful Flutter applications while constantly exploring vulnerabilities 
            and strengthening digital defenses. My approach combines clean code with security-first thinking.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Code2, title: "Developer", desc: "Clean, scalable mobile apps" },
              { icon: Shield, title: "Security", desc: "CTF player & bug hunter" },
              { icon: Terminal, title: "Builder", desc: "Open source contributor" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-hover rounded-xl p-5"
              >
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
