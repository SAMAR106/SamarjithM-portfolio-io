import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, X, CheckCircle, AlertTriangle, Lightbulb, Github } from "lucide-react";

const projects = [
  {
    title: "Healthcare AI System",
    problem: "Manual healthcare processes are slow and inefficient",
    solution: "Built AI-based system to automate patient interaction and data handling, reducing processing time significantly.",
    tech: ["Python", "AI Models", "APIs"],
    accent: "from-primary/20 to-primary/5",
    github: "https://github.com/SAMAR106/Healthcare",
    details: {
      overview: "An end-to-end AI-powered healthcare automation platform that streamlines patient data processing, appointment management, and clinical decision support.",
      challenges: [
        "Processing large volumes of unstructured medical data",
        "Ensuring HIPAA-compliant data handling and security",
        "Integrating with existing hospital management systems",
      ],
      features: [
        "Automated patient intake and data extraction",
        "AI-driven preliminary diagnosis suggestions",
        "Real-time health monitoring dashboard",
        "Secure API integration with hospital databases",
      ],
      impact: "Reduced patient processing time by 60% and improved data accuracy by 45%.",
      duration: "3 months",
      role: "Lead AI Developer",
    },
  },
  {
    title: "Home Automation Voice Agent",
    problem: "Manual device control is inconvenient",
    solution: "Voice-controlled system to automate home devices with natural language commands and real-time responses.",
    tech: ["Python", "IoT", "Speech Recognition"],
    accent: "from-accent/20 to-accent/5",
    github: "https://github.com/SAMAR106/home-automation-use-simple-vocie-agent",
    details: {
      overview: "A smart home voice assistant that understands natural language commands to control IoT devices, set routines, and provide real-time feedback.",
      challenges: [
        "Handling diverse accents and speech patterns",
        "Low-latency communication with IoT devices",
        "Building a robust intent recognition pipeline",
      ],
      features: [
        "Natural language voice command processing",
        "Multi-device simultaneous control",
        "Custom routine scheduling and automation",
        "Real-time device status monitoring",
      ],
      impact: "Enabled hands-free control of 15+ home devices with 95% command accuracy.",
      duration: "2 months",
      role: "Full-Stack IoT Developer",
    },
  },
  {
    title: "College Chatbot",
    problem: "Students lack quick access to information",
    solution: "NLP-powered chatbot that answers college queries instantly — admissions, schedules, and campus info.",
    tech: ["NLP", "Python", "Flask"],
    accent: "from-primary/15 to-accent/10",
    github: "https://github.com/deepaklatha1906-ctrl/College-chatbot",
    details: {
      overview: "An intelligent conversational chatbot deployed for a college campus, capable of answering FAQs about admissions, courses, faculty, events, and campus facilities.",
      challenges: [
        "Training on domain-specific college data",
        "Handling ambiguous and multi-intent queries",
        "Maintaining context across conversation turns",
      ],
      features: [
        "Intent classification with 90%+ accuracy",
        "Multi-turn conversation support",
        "Admin panel for updating knowledge base",
        "Analytics dashboard for tracking common queries",
      ],
      impact: "Handled 500+ daily student queries, reducing staff workload by 40%.",
      duration: "6 weeks",
      role: "NLP Engineer",
    },
  },
  {
    title: "Telegram Chatbot",
    problem: "Need automated communication system",
    solution: "Telegram bot handling auto-replies, scheduled alerts, and custom commands for seamless communication.",
    tech: ["Telegram API", "Python", "Webhooks"],
    accent: "from-accent/15 to-primary/10",
    github: "https://github.com/SAMAR106/telegram-chatbot",
    details: {
      overview: "A feature-rich Telegram bot designed for automated communication, capable of handling scheduled messages, custom commands, and intelligent auto-replies.",
      challenges: [
        "Managing concurrent user sessions efficiently",
        "Implementing reliable webhook-based architecture",
        "Building a flexible command parser system",
      ],
      features: [
        "Custom slash commands with rich responses",
        "Scheduled message broadcasting",
        "Inline query support for quick actions",
        "User activity tracking and analytics",
      ],
      impact: "Automated 80% of routine communications, serving 200+ active users.",
      duration: "4 weeks",
      role: "Bot Developer",
    },
  },
];

const ProjectModal = ({
  project,
  index,
  onClose,
}: {
  project: (typeof projects)[0];
  index: number;
  onClose: () => void;
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal */}
      <motion.div
        className="relative glass rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-border/30 p-6 md:p-8"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="text-[10px] font-heading tracking-[0.3em] uppercase text-primary/60">
            Project 0{index + 1}
          </span>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-1">
            {project.title}
          </h3>
          <div className="flex gap-4 mt-3 text-xs text-muted-foreground flex-wrap">
            <span>
              <span className="text-primary font-semibold">Role:</span> {project.details.role}
            </span>
            <span>
              <span className="text-primary font-semibold">Duration:</span> {project.details.duration}
            </span>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-primary/40 text-primary hover:border-primary/80 hover:bg-primary/10 transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                View on GitHub
              </a>
            )}
          </div>
        </div>

        {/* Overview */}
        <div className="mb-6">
          <p className="text-muted-foreground text-sm leading-relaxed font-light">
            {project.details.overview}
          </p>
        </div>

        {/* Problem */}
        <div className="glass rounded-xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-orange-400" />
            <span className="font-heading text-sm font-semibold text-foreground">Problem</span>
          </div>
          <p className="text-muted-foreground text-sm font-light">{project.problem}</p>
        </div>

        {/* Solution */}
        <div className="glass rounded-xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="font-heading text-sm font-semibold text-foreground">Solution</span>
          </div>
          <p className="text-muted-foreground text-sm font-light">{project.solution}</p>
        </div>

        {/* Challenges */}
        <div className="mb-5">
          <h4 className="font-heading text-sm font-semibold text-foreground mb-3">Key Challenges</h4>
          <ul className="space-y-2">
            {project.details.challenges.map((c) => (
              <li key={c} className="flex items-start gap-2 text-muted-foreground text-sm font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className="mb-5">
          <h4 className="font-heading text-sm font-semibold text-foreground mb-3">Features Built</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.details.features.map((f) => (
              <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground font-light">
                <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="glass rounded-xl p-4 mb-5 border border-primary/20">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-heading text-sm font-semibold gradient-text">Impact</span>
          </div>
          <p className="text-foreground text-sm font-medium">{project.details.impact}</p>
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="bg-muted text-muted-foreground text-[10px] font-heading tracking-wider uppercase px-3 py-1.5 rounded-full border border-border/50"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <>
      <section id="projects" className="section-padding relative noise-bg" ref={ref}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/4 blur-[180px]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-primary font-heading text-xs tracking-[0.4em] uppercase font-semibold">
                Projects
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Built to <span className="gradient-text">solve</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-lg mb-14 font-light">
              Every project starts with a real problem. Click on any project to explore the full details.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass glass-hover rounded-2xl p-7 flex flex-col group relative overflow-hidden cursor-pointer card-glow border border-primary/20"
                onClick={() => setSelectedProject(i)}
              >
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${project.accent} opacity-80`} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-primary/20 to-accent/10" />

                <div className="flex items-start justify-between mb-4 relative z-10">
                  <span className="text-[10px] font-heading tracking-[0.3em] uppercase text-primary/70 glow-primary-sm">
                    0{i + 1}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:glow-primary-sm" />
                </div>

                <h3 className="font-heading text-lg font-bold text-foreground mb-2 relative z-10">{project.title}</h3>
                <p className="text-primary/80 text-xs font-medium mb-3 tracking-wide uppercase relative z-10">
                  {project.problem}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 font-light relative z-10">
                  {project.solution}
                </p>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-muted text-muted-foreground text-[10px] font-heading tracking-wider uppercase px-3 py-1.5 rounded-full border border-primary/30 hover:border-primary/60 transition-colors hover:glow-primary-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-lg border border-primary/40 text-primary text-xs font-semibold hover:border-primary/80 hover:bg-primary/10 transition-all relative z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-3.5 h-3.5" />
                    View Code
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <ProjectModal
            project={projects[selectedProject]}
            index={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
