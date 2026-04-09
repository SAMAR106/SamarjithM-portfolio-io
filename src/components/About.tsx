import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Zap, MessageSquare, Globe } from "lucide-react";

const highlights = [
  { icon: Cpu, label: "AI & ML", desc: "Deep learning models & intelligent pipelines" },
  { icon: Zap, label: "Automation", desc: "End-to-end workflow automation" },
  { icon: MessageSquare, label: "Chatbots", desc: "NLP-powered conversational agents" },
  { icon: Globe, label: "Web Dev", desc: "Modern full-stack applications" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative noise-bg" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary font-heading text-xs tracking-[0.4em] uppercase font-semibold">About</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            Engineering <span className="gradient-text">intelligence</span>
            <br />into every solution
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed font-light">
            I'm an AI developer passionate about solving real-world problems through automation, 
            machine learning, and intelligent systems. Every project starts with a problem worth solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="glass glass-hover rounded-2xl p-5 group cursor-default border-glow glow-primary-sm hover:glow-primary"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors glow-primary-sm group-hover:glow-primary">
                <item.icon className="w-5 h-5 text-primary animate-pulse-glow" />
              </div>
              <div className="font-heading font-bold text-foreground text-sm mb-1 neon-text">{item.label}</div>
              <div className="text-muted-foreground text-xs leading-relaxed">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
