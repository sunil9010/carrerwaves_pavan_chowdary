
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Briefcase, Target, CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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

const AboutPage = () => {
  const teamMembers = [
    { name: "Pavan Chowdary", role: "Founder & Lead Consultant", bio: "With over 4 years of dedicated experience in talent acquisition and career consulting, Pavan has successfully guided hundreds of professionals to their dream careers. His vision for Career Waves is to be a beacon of opportunity and growth for job seekers across India.", image: "Professional headshot of Pavan Chowdary", delay: 0.2 },
  ];

  const coreValues = [
    { title: "Integrity", description: "We operate with transparency and honesty in all our interactions.", icon: CheckCircle, delay: 0.1 },
    { title: "Candidate First", description: "Your career aspirations are our top priority. We provide personalized support.", icon: Users, delay: 0.2 },
    { title: "Excellence", description: "We strive for the highest standards in our services and placements.", icon: Award, delay: 0.3 },
    { title: "Partnership", description: "We build long-term relationships with candidates and companies.", icon: Briefcase, delay: 0.4 },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader 
        title="About Career Waves"
        subtitle="Learn more about our mission, vision, and the dedicated professional behind our success."
      />

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img  
                className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-video" 
                alt="Career Waves team collaborating"
               src="https://images.unsplash.com/photo-1493882552576-fce827c6161e" />
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Our <span className="gradient-text">Mission</span></h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                At Career Waves, our mission is to empower job seekers by connecting them with the right opportunities and providing them with the skills and support needed to excel in their careers. We aim to bridge the gap between talented individuals and leading companies.
              </p>
              <Target size={32} className="text-sky-500 mb-4" />
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We are committed to fostering growth, facilitating successful placements, and building lasting relationships based on trust and mutual success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-16"
          >
            Meet Our <span className="gradient-text">Founder</span>
          </motion.h2>
          {teamMembers.map((member) => (
            <motion.div 
              key={member.name} 
              className="max-w-4xl mx-auto bg-gradient-to-r from-sky-50 via-white to-cyan-50 p-8 md:p-12 rounded-xl shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: member.delay }}
            >
              <img  
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-sky-300" 
                alt={member.name}
               src="https://images.unsplash.com/photo-1649015931204-15a3c789e6ea" />
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-slate-800 mb-1">{member.name}</h3>
                <p className="text-sky-600 font-semibold text-lg mb-4">{member.role}</p>
                <p className="text-slate-600 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-slate-800 text-white section-padding">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Our Core <span className="gradient-text">Values</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => (
              <motion.div 
                key={value.title} 
                className="text-center p-6 bg-slate-700 rounded-lg shadow-lg hover:bg-slate-600 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: value.delay }}
              >
                <value.icon size={40} className="mx-auto mb-4 text-sky-400" />
                <h4 className="text-xl font-semibold text-white mb-2">{value.title}</h4>
                <p className="text-slate-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity:0, y:30 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.6, delay: 0.4 }}
          >
            <Zap size={48} className="mx-auto mb-6 text-sky-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Join the Career Waves Community</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
              We are more than just a consultancy; we are a community dedicated to career growth and success. Let us be a part of your journey.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold text-lg px-8 py-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                Connect With Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
  