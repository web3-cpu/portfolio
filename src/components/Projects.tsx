import { motion } from 'framer-motion';
import { Gem } from 'lucide-react';

const projects = [
  {
    title: 'Crystal DeFi Protocol',
    description: 'Decentralized lending platform with unique yield optimization strategies',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    tech: ['Solidity', 'React', 'Web3.js'],
  },
  {
    title: 'NFT Marketplace',
    description: 'Fantasy-themed NFT marketplace for digital art and collectibles',
    image: 'https://images.unsplash.com/photo-1634704784915-aacf363b021f?auto=format&fit=crop&q=80&w=800',
    tech: ['Next.js', 'Ethers.js', 'IPFS'],
  },
  {
    title: 'Blockchain Explorer',
    description: 'Real-time blockchain data visualization with ethereal design',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=800',
    tech: ['TypeScript', 'D3.js', 'Node.js'],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Magical Creations</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my enchanted realm of blockchain projects, where technology meets imagination
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
              </div>
              
              <div className="relative -mt-20 mx-4">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Gem className="text-primary w-5 h-5" />
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}