import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");

    // Show success message (email functionality removed)
    console.log("Form submitted:", form);
    
    // Reset form after a short delay
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setStatus("success");
      setIsLoading(false);
      setTimeout(() => setStatus("idle"), 3000);
    }, 500);
  };

  return (
    <section id="contact" className="section-padding noise-bg" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary font-heading text-xs tracking-[0.4em] uppercase font-semibold">Contact</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Let's <span className="gradient-text">collaborate</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-md mb-12 font-light">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Links — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-3"
          >
            {[
              { icon: Mail, label: "Email", href: "mailto:samarjith2007@gmail.com" },
              { icon: Github, label: "GitHub", href: "https://github.com/SAMAR106" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/samarjith-m-404b42299" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass glass-hover rounded-xl p-4 flex items-center gap-4 group border-glow glow-primary-sm hover:glow-primary"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:glow-primary-sm">
                  <item.icon className="w-4 h-4 text-primary animate-pulse-glow" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm neon-text">{item.label}</span>
              </a>
            ))}
          </motion.div>

          {/* Form — 3 cols */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 glass rounded-2xl p-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-muted/50 border border-border/40 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors font-body text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full bg-muted/50 border border-border/40 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors font-body text-sm"
            />
            <textarea
              placeholder="Your message..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-muted/50 border border-border/40 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors font-body text-sm resize-none"
            />
            <div className="space-y-3">
              {status === "success" && (
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 text-sm text-center">
                  ✓ Message sent successfully!
                </div>
              )}
              {status === "error" && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 text-sm text-center">
                  ✗ Failed to send message. Please try again.
                </div>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full relative overflow-hidden rounded-xl py-3.5 font-heading font-semibold text-sm text-primary-foreground group disabled:opacity-60"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent transition-transform duration-500 group-hover:scale-105" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isLoading ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </span>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
