import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-secondary to-black">
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent opacity-20" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          John Pool
        </motion.h1>
        <motion.h2 
          className="text-2xl md:text-3xl text-primary mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Senior Blockchain Engineer
        </motion.h2>
        
        <motion.div 
          className="flex gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a href="https://docs.google.com/document/d/1IEUf3_7osWJarmjVmI2AO5MVXvATPDee/edit?usp=drive_link&ouid=105167766408245062414&rtpof=true&sd=true" className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
            <FileText size={20} />
            Download Resume
          </a>
          <a href="https://www.linkedin.com/in/john-pool-376864361" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg flex items-center gap-2 backdrop-blur-sm transition-colors">
            <ExternalLink size={20} />
            Contact Me
          </a>
        </motion.div>

        <motion.div 
          className="flex gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a href="https://github.com/web3-cpu" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/john-pool-376864361" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}