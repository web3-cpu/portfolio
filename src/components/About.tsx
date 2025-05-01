import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-gray-300 leading-relaxed">
              I build stuff for the web3 world. Been coding for 9+ years now, and I got really into blockchain along the way.
              What I'm best at? Making websites that connect to crypto and blockchain in ways that don't confuse people. I focus on the front part - what you see and click on.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              I like solving hard problems. When someone can use a DeFi app I built and think 'hey, this makes sense' - that's what gets me excited.
              Simple designs. Clean code. Technology that works for real people. That's what I care about in my projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}