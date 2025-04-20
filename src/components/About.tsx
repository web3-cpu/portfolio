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
              With over 9 years of experience in full-stack development and a deep specialization in blockchain technology,
              I'm passionate about building the future of decentralized systems. My expertise spans from developing smart contracts
              and DeFi protocols to creating seamless user experiences with modern web technologies.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              I thrive on challenging projects that push the boundaries of what's possible in Web3, 
              combining technical excellence with innovative problem-solving to deliver robust, 
              scalable solutions that make a real impact in the blockchain space.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}