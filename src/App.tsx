import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Layout, 
  Database, 
  Phone,
  Server,
  ChevronRight,
  Twitter,
  FileText,
  MessageSquare,
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Data ---
const SKILLS = [
  { name: "React / Next.js", icon: <Layout className="w-5 h-5" />, category: "Frontend" },
  { name: "Node.js / Express", icon: <Server className="w-5 h-5" />, category: "Backend" },
  { name: "WebRTC / Socket.io", icon: <Globe className="w-5 h-5" />, category: "Real-time" },
  { name: "MongoDB / SQL", icon: <Database className="w-5 h-5" />, category: "Database" },
  { name: "TypeScript / JS", icon: <Terminal className="w-5 h-5" />, category: "Languages" },
  { name: "C / C++", icon: <Cpu className="w-5 h-5" />, category: "Languages" },
  { name: "Tailwind / MUI", icon: <Layout className="w-5 h-5" />, category: "UI/UX" },
  { name: "Redux / Git", icon: <Code2 className="w-5 h-5" />, category: "Tools" },
];

const PROJECTS = [
  {
    title: "MeetBuddy",
    description: "A real-time P2P video conferencing platform using WebRTC with Socket.io-based signaling. Features video/audio calls, screen sharing, and real-time chat.",
    tech: ["React", "WebRTC", "Socket.io", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Gorachand-Senapati/MeetBuddy",
    live: "https://meetbuddyfrontend.onrender.com/"
  },
  {
    title: "LinkBond",
    description: "A professional networking and link-sharing platform designed for seamless connectivity. Streamlines professional profiles and social integration.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Gorachand-Senapati/LinkBond",
    live: "https://link-bond.vercel.app/"
  },
  {
    title: "Wanderlust",
    description: "An Airbnb clone featuring property listings, authentication, and booking functionality. Includes Cloudinary for images and Google Maps integration.",
    tech: ["Node.js", "Express", "MongoDB", "Cloudinary", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Gorachand-Senapati/Wanderlust",
    live: "https://wanderlust-1il0.onrender.com/listings"
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-4",
      isScrolled ? "bg-white/80 dark:bg-dark-surface/80 backdrop-blur-lg border-b border-black/5 dark:border-white/5 py-3 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold font-mono tracking-tighter"
        >
          GS<span className="text-brand-primary">.</span>
        </motion.div>

        {/* Unified Smooth Desktop & Mobile Row Nav */}
        <div className="flex items-center gap-4 md:gap-8 text-xs md:text-sm font-medium">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="hover:text-brand-primary transition-colors duration-200"
            >
              {link.name}
            </motion.a>
          ))}
          <a href="#contact" className="hidden sm:inline-block px-5 py-2 bg-brand-primary text-white rounded-full text-xs hover:bg-emerald-600 transition-colors">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

const SkillCard = ({ name, icon, category }: any) => (
  <motion.div 
    whileHover={{ y: -5, backgroundColor: "rgba(16, 185, 129, 0.05)" }}
    className="p-4 glass-card flex flex-col gap-3 transition-colors duration-300"
  >
    <div className="text-brand-primary">{icon}</div>
    <div>
      <h4 className="text-sm font-medium">{name}</h4>
      <p className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-mono mt-1">{category}</p>
    </div>
  </motion.div>
);

const ProjectCard = ({ project }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group glass-card overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow"
  >
    <div className="aspect-video relative overflow-hidden bg-slate-100 dark:bg-slate-800">
      <img 
        src={project.image} 
        alt={project.title} 
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        <a href={project.link} target="_blank" rel="noreferrer" className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform">
          <Github className="w-5 h-5" />
        </a>
        <a href={project.live} target="_blank" rel="noreferrer" className="p-3 bg-brand-primary text-white rounded-full hover:scale-110 transition-transform">
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl mb-2">{project.title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 flex-grow leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map(t => (
          <span key={t} className="text-[10px] px-2 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-full font-mono text-slate-600 dark:text-slate-300">
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-light-surface dark:bg-dark-surface transition-colors duration-300 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center section-padding overflow-hidden scroll-mt-20">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-secondary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-primary font-mono text-sm tracking-[0.2em] uppercase mb-4"
          >
            Developing Scalable Real-time Solutions
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold mb-6 leading-tight break-words"
          >
            Gorachand <br /> 
            <span className="text-gradient">Senapati</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
          >
            Computer Science undergraduate specializing in full-stack development and real-time systems. Proficient in React, Node.js, and C++ with a focus on high-performance applications.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a href="#projects" className="px-6 md:px-8 py-3 md:py-4 bg-brand-primary text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors flex items-center gap-2 group shadow-lg shadow-brand-primary/20 text-sm md:text-base">
              View Projects <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="https://drive.google.com/file/d/1Od8hl2egfPZ9Wi-0WFKAg0t3WQrxe0Jx/view?usp=drivesdk" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-900 dark:text-white font-medium hover:text-brand-primary transition-colors group text-sm md:text-base">
              <FileText className="w-5 h-5" />
              <span>Resume</span>
            </a>

            <div className="flex items-center gap-6">
              <a href="https://github.com/Gorachand-Senapati" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-brand-primary transition-colors">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/gorachandsenapati/" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-brand-primary transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="https://x.com/GorachandS26802" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-brand-primary transition-colors">
                <Twitter size={22} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900/20 rounded-[2rem] md:rounded-[3rem] scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative">
            <div className="aspect-square glass-card rotate-3 group overflow-hidden shadow-2xl">
              <img 
                src="profile.jpeg"
                alt="Gorachand Senapati"
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-brand-primary/10 opacity-50 group-hover:opacity-0 transition-opacity" />
            </div>
            <div className="absolute -bottom-4 -left-4 px-4 py-3 glass-card bg-brand-primary/20 backdrop-blur-xl border-brand-primary/20">
              <p className="font-mono text-[10px] md:text-xs text-slate-800 dark:text-white font-bold">Based in West Bengal, IN</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl mb-6 flex items-center gap-4">
              <span className="w-8 h-1 bg-brand-primary rounded-full" />
              About Me
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
              <p>
                I am a focused Computer Science student currently pursuing my B.Tech at Cooch Behar Government Engineering College. My journey in tech is driven by a deep curiosity for how large-scale real-time systems work.
              </p>
              <p>
                With over <span className="text-slate-900 dark:text-white font-semibold">500+ problems solved</span> on platforms like LeetCode and GeeksforGeeks, I've built a solid foundation in Data Structures and Algorithms, which I apply to architecting efficient software solutions using <span className="text-brand-primary font-medium">C++</span> and <span className="text-brand-primary font-medium">Modern Web Technologies</span>.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-black/5 dark:border-white/5 flex flex-wrap gap-6 md:gap-12">
              <div>
                <p className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">8.83</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-slate-500 font-mono">Current SGPA</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">500+</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-slate-500 font-mono">DSA Solved</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">1500+</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-slate-500 font-mono">Contest Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Technical Toolkit</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">The technologies I use to bring complex ideas to life.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SKILLS.map((skill, idx) => (
            <SkillCard key={idx} {...skill} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding overflow-hidden scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl mb-3">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">A selection of my recent full-stack contributions.</p>
          </div>
          <div className="flex">
            <span className="px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-[10px] font-mono font-medium uppercase tracking-wider">Full Stack Architecture</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

        {/* External Profiles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 glass-card border-dashed bg-transparent flex items-center justify-between group cursor-default gap-4"
          >
            <div>
              <h3 className="text-base md:text-lg font-medium">Open Source Contributions</h3>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-1 uppercase tracking-widest leading-tight">Global OSS Repositories • Web Development</p>
            </div>
            <a href="https://github.com/Gorachand-Senapati" target="_blank" rel="noreferrer" className="p-2 md:p-3 rounded-full border border-black/10 dark:border-white/10 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all flex-shrink-0">
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 glass-card border-dashed bg-transparent flex items-center justify-between group cursor-default gap-4"
          >
            <div>
              <h3 className="text-base md:text-lg font-medium">LeetCode Solutions</h3>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-1 uppercase tracking-widest leading-tight">500+ Problems • C++ • DSA Mastery</p>
            </div>
            <a href="https://leetcode.com/u/GorachandSenapati/" target="_blank" rel="noreferrer" className="p-2 md:p-3 rounded-full border border-black/10 dark:border-white/10 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all flex-shrink-0">
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-slate-100 dark:bg-slate-900/50 rounded-[2rem] md:rounded-[3rem] mb-12 scroll-mt-24">
        <div className="glass-card p-6 md:p-12 relative overflow-hidden shadow-2xl border-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[80px] -mr-32 -mt-32" />
          
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 relative z-10">
            <div className="max-w-full">
              <h2 className="text-3xl md:text-4xl mb-4 flex items-center gap-3">
                 Get in <span className="text-brand-primary">Touch</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-lg mb-8 leading-relaxed max-w-full break-words">
                I'm currently open to <span className="text-slate-900 dark:text-white font-medium italic">SDE internships</span> and freelance collaborations. Let's discuss how we can build something amazing together.
              </p>
              
              <div className="space-y-4 max-w-full">
                <a href="mailto:gorachandsenapati8@gmail.com" className="flex items-center gap-3 md:gap-4 group max-w-full overflow-hidden">
                  <div className="w-10 h-10 md:w-12 md:h-12 glass-card flex items-center justify-center group-hover:text-brand-primary group-hover:border-brand-primary transition-all flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] md:text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono">Email Me</p>
                    <p className="text-sm md:text-lg font-medium truncate break-all block text-slate-900 dark:text-white">
                      gorachandsenapati8@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 md:gap-4 group max-w-full">
                  <div className="w-10 h-10 md:w-12 md:h-12 glass-card flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="group-hover:text-brand-primary transition-colors" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] md:text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono">Text / Call</p>
                    <p className="text-sm md:text-lg font-medium text-slate-900 dark:text-white">+91-9732219308</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <a href="https://www.linkedin.com/in/gorachandsenapati/" target="_blank" rel="noreferrer" className="p-4 md:p-8 glass-card flex flex-col items-center text-center gap-3 hover:border-brand-primary transition-all group shadow-md">
                  <Linkedin size={32} className="text-slate-400 group-hover:text-[#0077b5] transition-colors" />
                  <span className="text-[10px] font-mono uppercase tracking-widest dark:text-slate-400">LinkedIn</span>
                </a>
                <a href="https://github.com/Gorachand-Senapati" target="_blank" rel="noreferrer" className="p-4 md:p-8 glass-card flex flex-col items-center text-center gap-3 hover:border-brand-primary transition-all group shadow-md">
                  <Github size={32} className="text-slate-400 dark:group-hover:text-white group-hover:text-slate-900 transition-colors" />
                  <span className="text-[10px] font-mono uppercase tracking-widest dark:text-slate-400">GitHub</span>
                </a>
                <a href="https://x.com/GorachandS26802" target="_blank" rel="noreferrer" className="p-4 md:p-8 glass-card flex flex-col items-center text-center gap-3 hover:border-brand-primary transition-all group shadow-md">
                  <Twitter size={32} className="text-slate-400 group-hover:text-[#1DA1F2] transition-colors" />
                  <span className="text-[10px] font-mono uppercase tracking-widest dark:text-slate-400">Twitter</span>
                </a>
                <a href="https://leetcode.com/u/GorachandSenapati/" target="_blank" rel="noreferrer" className="p-4 md:p-8 glass-card flex flex-col items-center text-center gap-3 hover:border-brand-primary transition-all group shadow-md">
                  <MessageSquare size={32} className="text-slate-400 group-hover:text-orange-500 transition-colors" />
                  <span className="text-[10px] font-mono uppercase tracking-widest dark:text-slate-400">LeetCode</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 md:py-12 border-t border-black/5 dark:border-white/5 opacity-80">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-900 dark:text-slate-300">
          <p className="text-sm font-mono tracking-tight cursor-default">
            Gorachand <span className="text-brand-primary">Senapati</span>
          </p>
          <div className="flex gap-6 md:gap-8 text-[10px] md:text-xs font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase">
             <a href="#about" className="hover:text-brand-primary transition-colors">About</a>
             <a href="#projects" className="hover:text-brand-primary transition-colors">Work</a>
             <a href="#contact" className="hover:text-brand-primary transition-colors">Contact</a>
          </div>
          <p className="text-[10px] md:text-xs text-slate-400 dark:text-slate-500 font-mono">
            &copy; {new Date().getFullYear()} GS. Crafted with precision.
          </p>
        </div>
      </footer>
    </div>
  );
}