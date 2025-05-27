
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Briefcase, Users, Zap, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const services = [
    { title: "IT & Non-IT Jobs", description: "Connecting talent with top MNCs for both technical and non-technical roles.", icon: Briefcase, delay: 0.2 },
    { title: "Training + Placements", description: "Comprehensive courses (JS, Python, React, Node) followed by assured placement support.", icon: Award, delay: 0.4 },
    { title: "Career Support", description: "Expert guidance in PF modifications, interview management, and proxy support.", icon: Users, delay: 0.6 },
  ];

  const testimonials = [
    { name: "Ravi K.", quote: "Career Waves helped me land my dream job in an MNC. Pavan sir's guidance was invaluable!", image: "Testimonial candidate Ravi smiling", delay: 0.2 },
    { name: "Priya S.", quote: "The training program was excellent, and I got placed within a month. Highly recommended!", image: "Testimonial candidate Priya giving a thumbs up", delay: 0.4 },
    { name: "Amit G.", quote: "From resume building to final interview, they supported me at every step. Thank you Career Waves!", image: "Testimonial candidate Amit in professional attire", delay: 0.6 },
  ];

  const stats = [
    { value: "100+", label: "Successful Placements", icon: CheckCircle, delay: 0.1 },
    { value: "4+", label: "Years of Experience", icon: Zap, delay: 0.3 },
    { value: "Diverse", label: "Industries Covered", icon: Briefcase, delay: 0.5 },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white section-padding flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <img  src="/hero-background-pattern.svg" alt="Abstract background pattern" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1691144605799-cfaf2b18aa04" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            Welcome to <span className="gradient-text">Career Waves</span>
          </motion.h1>
          <motion.p 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto"
          >
            Your trusted partner for IT and Non-IT jobs, expert training, and dedicated placement assistance. Led by Pavan Chowdary, with 4+ years of experience and over 100 successful placements.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/jobs">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold text-lg px-10 py-7 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                Explore Job Openings <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <section id="about-pavan" className="bg-slate-50 section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img  
                className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-[4/3]" 
                alt="Pavan Chowdary - Consultant at Career Waves"
               src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Meet <span className="gradient-text">Pavan Chowdary</span></h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Pavan Chowdary is the driving force behind Career Waves. With over 4 years of dedicated experience in the recruitment and placement industry, Pavan has successfully placed hundreds of candidates in leading MNCs and various other companies.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                His expertise spans IT and Non-IT sectors, catering to both freshers and experienced professionals. Pavan's commitment is to provide personalized guidance and support throughout your job search journey, ensuring you achieve your career aspirations.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition-colors duration-300">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-16"
          >
            Our Core <span className="gradient-text">Services</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.delay }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className="h-full"
              >
                <Card className="h-full flex flex-col bg-gradient-to-br from-sky-50 via-white to-cyan-50 hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">
                  <CardHeader className="items-center text-center bg-sky-500/10 p-6">
                    <div className="p-4 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full text-white mb-4 shadow-lg">
                      <service.icon size={36} />
                    </div>
                    <CardTitle className="text-slate-800 text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-slate-600 leading-relaxed flex-grow p-6">
                    <p>{service.description}</p>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                     <Link to="/services" className="w-full block">
                        <Button variant="link" className="text-sky-600 hover:text-sky-700 w-full font-semibold">
                          Discover More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                     </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="stats" className="bg-slate-800 text-white section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                className="p-6 rounded-lg"
              >
                <stat.icon size={48} className="mx-auto mb-4 text-sky-400" />
                <p className="text-4xl font-bold gradient-text">{stat.value}</p>
                <p className="text-slate-300 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="payment-info" className="bg-sky-50 section-padding">
        <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
                <Zap size={48} className="mx-auto mb-6 text-sky-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Flexible Payment Model</h2>
                <p className="text-lg text-slate-600 mb-3 max-w-2xl mx-auto">
                    We believe in your success first. Payment is primarily due <span className="font-semibold text-sky-700">after you receive an offer letter</span>.
                </p>
                <p className="text-md text-slate-500 max-w-2xl mx-auto">
                    An initial registration fee may apply based on your experience level and the services chosen. We ensure transparency and value in every step.
                </p>
            </motion.div>
        </div>
      </section>

      <section id="testimonials" className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-16"
          >
            Success Stories from Our <span className="gradient-text">Candidates</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: testimonial.delay }}
                className="h-full"
              >
                <Card className="glassmorphism-card p-6 h-full flex flex-col text-slate-700 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center space-x-4">
                      <img  
                        className="w-16 h-16 rounded-full object-cover border-2 border-sky-300" 
                        alt={testimonial.name}
                       src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                      <div>
                        <CardTitle className="text-xl text-slate-800">{testimonial.name}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    <p className="italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Elevate Your Career?
          </motion.h2>
          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            Join Career Waves today and let us help you find the perfect opportunity or gain the skills you need to succeed.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-x-0 md:space-x-4 space-y-4 md:space-y-0 flex flex-col md:flex-row justify-center items-center"
          >
            <Link to="/contact">
              <Button size="lg" className="bg-white text-sky-600 hover:bg-slate-100 font-semibold text-lg px-10 py-7 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full md:w-auto">
                Get in Touch
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-sky-600 font-semibold text-lg px-10 py-7 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 w-full md:w-auto">
                View Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
  