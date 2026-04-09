import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Brain, Zap, MessageCircle, Cog, Code2, Sparkles } from "lucide-react";

const skills = [
  { name: "AI / Machine Learning", level: 90, icon: Brain, color: "from-blue-500 to-cyan-500" },
  { name: "Python", level: 95, icon: Code2, color: "from-yellow-500 to-orange-500" },
  { name: "Chatbot Development", level: 85, icon: MessageCircle, color: "from-pink-500 to-rose-500" },
  { name: "Automation Systems", level: 88, icon: Cog, color: "from-purple-500 to-indigo-500" },
  { name: "Web Development", level: 80, icon: Zap, color: "from-green-500 to-emerald-500" },
  { name: "NLP", level: 82, icon: Sparkles, color: "from-violet-500 to-purple-500" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const CircularProgress = ({ level, isAnimating }: { level: number; isAnimating: boolean }) => {
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (level / 100) * circumference;

    return (
      <div className="relative w-24 h-24">
        <svg className="absolute inset-0 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-muted"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={isAnimating ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
            className="text-primary"
            style={{ filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.6))" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold">{level}%</span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="section-padding noise-bg" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary font-heading text-xs tracking-[0.4em] uppercase font-semibold">Skills</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Core <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            const isHovered = hoveredIndex === i;
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group cursor-pointer h-full"
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-muted/40 p-6 backdrop-blur-sm transition-all duration-300 bg-muted/20 hover:bg-muted/40 hover:border-primary/40 glow-primary-sm hover:glow-primary">
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 bg-gradient-to-br ${skill.color}`}
                  />

                  {/* Animated Glow Effect */}
                  <motion.div
                    className={`absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-gradient-to-br ${skill.color}`}
                    style={{ zIndex: -1 }}
                  />

                  <div className="relative z-10 flex flex-col h-full items-center justify-center gap-4">
                    {/* Icon */}
                    <motion.div
                      animate={isHovered ? { scale: 1.1, rotate: 10 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white`}
                    >
                      <Icon size={32} />
                    </motion.div>

                    {/* Circular Progress */}
                    <motion.div
                      animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CircularProgress level={skill.level} isAnimating={isInView} />
                    </motion.div>

                    {/* Skill Name */}
                    <h3 className="font-heading font-semibold text-center text-sm md:text-base text-foreground line-clamp-2">
                      {skill.name}
                    </h3>

                    {/* Decorative Elements */}
                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary"
                      animate={isHovered ? { scale: 1.5, opacity: 0.5 } : { scale: 1, opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-primary/60"
                      animate={isHovered ? { scale: 1.3, opacity: 0.4 } : { scale: 1, opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
