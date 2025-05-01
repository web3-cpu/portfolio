import { motion } from 'framer-motion';
import { Code2, Coins, Building2, ShoppingCart } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Lucia Protocol',
    period: 'Jan 2024 - Present',
    description: 'Leading the design and development of innovative DeFi user interfaces and frontend integrations with smart contracts',
    icon: <Code2 className="w-6 h-6" />,
    tech: ['Solidity', 'React', 'Next.js', 'TypeScript', 'Web3.js']
  },
  {
    title: 'Senior Software Engineer',
    company: 'Jasmy Lab',
    period: 'Jan 2023 - Jun 2024',
    description: 'Designed and built intuitive interfaces for decentralized data storage platforms with seamless IoT device integration',
    icon: <Coins className="w-6 h-6" />,
    tech: ['Ethereum', 'Node.js', 'AWS', 'Docker']
  },
  {
    title: 'Full Stack Developer',
    company: 'Coinbase',
    period: 'Jan 2020 - Dec 2022',
    description: 'Developed high-performance, real-time trading interfaces with responsive UI and smooth Web3 connectivity',
    icon: <Building2 className="w-6 h-6" />,
    tech: ['React', 'Python', 'PostgreSQL', 'Redis']
  },
  {
    title: 'Full Stack Developer',
    company: 'Amazon Ecommerce',
    period: 'Jul 2015 - Dec 2019',
    description: 'Developed scalable e-commerce solutions and payment systems',
    icon: <ShoppingCart className="w-6 h-6" />,
    tech: ['Java', 'Spring Boot', 'MySQL', 'AWS']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          Journey Through Time
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-16 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary to-primary/20" />
              <div className="absolute left-[-12px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                {exp.icon}
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 ml-6">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <p className="text-primary mt-1">{exp.company}</p>
                <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
                <p className="text-gray-300 mt-3">{exp.description}</p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {exp.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}