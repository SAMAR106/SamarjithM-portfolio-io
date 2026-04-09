import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import hero3dImg from "@/assets/hero-3d.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding relative overflow-hidden noise-bg">
      {/* 3D Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img src={hero3dImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/60" />
      </motion.div>

      {/* Animated orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/8 blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/6 blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text — 3 cols */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-body text-xs tracking-widest uppercase">
                Available for projects
              </span>
            </motion.div>

            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight">
              <span className="gradient-text">M.Samarjith</span>
            </h1>
            <p className="font-heading text-lg md:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6 tracking-wide uppercase">
              Artificial Intelligence & Data Science
            </p>

            <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-10 leading-relaxed font-light">
              From intelligent healthcare automation to voice-controlled smart homes — I engineer solutions where AI meets real-world impact.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="relative group overflow-hidden rounded-xl px-8 py-4 font-heading font-semibold text-sm text-primary-foreground btn-glow shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent transition-transform duration-500 group-hover:scale-105 glow-primary" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative z-10 flex items-center gap-2">
                  Explore Work
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </a>
              <a
                href="#contact"
                className="glass glass-hover rounded-xl px-8 py-4 font-heading font-semibold text-sm text-foreground border-glow"
              >
                Say Hello
              </a>
            </div>

            {/* Stats row */}
            <motion.div
              className="flex gap-8 mt-14 pt-8 border-t border-border/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {[
                { num: "4+", label: "Projects" },
                { num: "3+", label: "AI Models" },
                { num: "100%", label: "Passion" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-heading text-2xl md:text-3xl font-bold gradient-text">{s.num}</div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image — 2 cols */}
          <motion.div
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 blur-2xl animate-pulse-slow" />
              
              {/* Spinning border ring */}
              <div className="absolute -inset-[3px] rounded-[1.75rem] animate-spin-slow" style={{
                background: "conic-gradient(from 0deg, hsl(165 80% 50% / 0.4), transparent 30%, hsl(280 70% 60% / 0.3), transparent 70%, hsl(165 80% 50% / 0.4))"
              }} />

              {/* Image container */}
              <div className="relative rounded-[1.6rem] overflow-hidden p-[2px]">
                <div className="rounded-[1.5rem] overflow-hidden bg-card">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-64 h-72 md:w-72 md:h-80 object-cover object-top"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-40" />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass rounded-full px-5 py-2 flex items-center gap-2"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="gradient-text font-heading font-bold text-sm whitespace-nowrap">AI Developer</span>
              </motion.div>

              {/* Tech floating tag */}
              <motion.div
                className="absolute -top-2 -right-4 glass rounded-lg px-3 py-1.5 text-[10px] font-heading text-primary tracking-wider uppercase"
                animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                Python • ML • NLP
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
