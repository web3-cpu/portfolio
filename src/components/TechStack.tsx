import { motion } from 'framer-motion';
import { Code2, Database, Server, Cloud, Layout, Shield } from 'lucide-react';

const technologies = [
  {
    category: 'Frontend',
    icon: <Layout className="w-6 h-6 text-primary" />,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux']
  },
  {
    category: 'Backend',
    icon: <Server className="w-6 h-6 text-primary" />,
    skills: ['Node.js', 'Express', 'Python', 'Java']
  },
  {
    category: 'Blockchain',
    icon: <Shield className="w-6 h-6 text-primary" />,
    skills: ['Solidity', 'Web3.js', 'Ethers.js', 'Hardhat']
  },
  {
    category: 'Database',
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'GraphQL']
  },
  {
    category: 'DevOps',
    icon: <Cloud className="w-6 h-6 text-primary" />,
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD']
  },
  {
    category: 'Languages',
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Solidity']
  }
];

export default function TechStack() {
  return (
    <section id="tech" className="py-20 bg-secondary/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Mystical Arsenal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The powerful tools and technologies I wield to create digital magic
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                {tech.icon}
                <h3 className="text-xl font-semibold text-white">{tech.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tech.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}