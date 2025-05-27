
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Briefcase, Laptop, Users, BarChart, Edit3, Headphones, ShieldCheck, Zap, ArrowRight, Code, Server, Database, Cloud, TestTube } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    category: "Job Placements",
    icon: Briefcase,
    items: [
      { title: "IT Jobs", description: "Opportunities in software development, data science, cybersecurity, cloud computing, and more for freshers and experienced professionals.", icon: Laptop, delay: 0.1 },
      { title: "Non-IT Jobs", description: "Roles in marketing, sales, HR, finance, operations, and customer support across various industries.", icon: Users, delay: 0.2 },
    ]
  },
  {
    category: "Training & Development",
    icon: Zap,
    items: [
      { title: "JavaScript & Frontend", description: "Master modern JavaScript, HTML, CSS, and popular frameworks like Vite + React.", icon: Code, delay: 0.3 },
      { title: "Python & Data Science", description: "In-depth Python programming, data analysis, machine learning concepts.", icon: Database, delay: 0.4 },
      { title: "Node.js & Backend", description: "Build robust server-side applications with Node.js and Express.", icon: Server, delay: 0.5 },
      { title: "Full Stack Development", description: "Comprehensive training covering both frontend and backend technologies.", icon: Cloud, delay: 0.6 },
      { title: "Software Testing", description: "Learn manual and automated testing techniques to ensure software quality.", icon: TestTube, delay: 0.7 },
    ]
  },
  {
    category: "Career Enhancement Services",
    icon: BarChart,
    items: [
      { title: "Training + Placements", description: "Integrated programs combining skill development with guaranteed placement assistance.", icon: Zap, delay: 0.8 },
      { title: "PF Modifications", description: "Expert assistance with Provident Fund profile updates and corrections.", icon: Edit3, delay: 0.9 },
      { title: "Interview Management", description: "Mock interviews, resume building, and strategies to ace your interviews.", icon: Headphones, delay: 1.0 },
      { title: "Proxy & Work Support", description: "Confidential and reliable proxy attendance and on-the-job project support.", icon: ShieldCheck, delay: 1.1 },
    ]
  }
];

const PageHeader = ({ title, subtitle }) => (
  <motion.div 
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white section-padding text-center"
  >
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{title}</h1>
      <p className="text-xl text-slate-300 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  </motion.div>
);

const ServicesPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader 
        title="Our Comprehensive Services"
        subtitle="Tailored solutions to help you achieve your career goals, from job placements to skill enhancement."
      />

      <div className="section-padding">
        <div className="container mx-auto px-4">
          {services.map((category, categoryIndex) => (
            <motion.section 
              key={category.category} 
              className="mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.5 }}
            >
              <div className="flex items-center mb-10">
                <category.icon className="w-10 h-10 mr-4 text-sky-600" />
                <h2 className="text-3xl font-bold text-slate-800">{category.category}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((service) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: service.delay }}
                    whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                    className="h-full"
                  >
                    <Card className="h-full flex flex-col bg-white hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden border-l-4 border-sky-500">
                      <CardHeader>
                        <div className="flex items-center mb-3">
                          <div className="p-3 bg-sky-100 rounded-full text-sky-600 mr-4">
                            <service.icon size={24} />
                          </div>
                          <CardTitle className="text-slate-800 text-xl">{service.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="text-slate-600 leading-relaxed flex-grow">
                        <CardDescription>{service.description}</CardDescription>
                      </CardContent>
                      <div className="p-6 pt-0 mt-auto">
                        <Link to="/contact">
                          <Button variant="ghost" className="text-sky-600 hover:text-sky-700 hover:bg-sky-50 w-full justify-start font-semibold">
                            Enquire Now <ArrowRight className="ml-auto h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
          
          <motion.div 
            initial={{ opacity:0, y:30 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay: services.length * 0.2 + 0.5, duration:0.6 }}
            className="mt-20 text-center bg-gradient-to-r from-sky-500 to-cyan-400 p-10 rounded-xl shadow-xl"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Take the Next Step?</h3>
            <p className="text-lg text-sky-100 mb-8 max-w-xl mx-auto">
              Our team is dedicated to guiding you. Contact us today for a personalized consultation.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-sky-600 hover:bg-slate-100 font-semibold text-lg px-8 py-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                Contact Pavan Chowdary
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
  