
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

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

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Incomplete Form",
        description: "Please fill out all fields.",
        variant: "destructive",
      });
      return;
    }
    // Simulate form submission
    console.log("Form data submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' }); 
  };
  
  const WHATSAPP_NUMBER = "911234567890"; // Replace with actual WhatsApp number
  const WHATSAPP_MESSAGE = encodeURIComponent("Hello Career Waves, I'm interested in your services.");


  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader 
        title="Get in Touch"
        subtitle="We're here to help you navigate your career path. Reach out to us with any questions or to get started."
      />

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-xl shadow-xl border-t-4 border-sky-500"
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="font-medium text-slate-700">Full Name</Label>
                  <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required className="mt-2 py-3 px-4 text-md"/>
                </div>
                <div>
                  <Label htmlFor="email" className="font-medium text-slate-700">Email Address</Label>
                  <Input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" required className="mt-2 py-3 px-4 text-md"/>
                </div>
                <div>
                  <Label htmlFor="subject" className="font-medium text-slate-700">Subject</Label>
                  <Input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Reason for contacting" required className="mt-2 py-3 px-4 text-md"/>
                </div>
                <div>
                  <Label htmlFor="message" className="font-medium text-slate-700">Your Message</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Write your message here..." rows={5} required className="mt-2 py-3 px-4 text-md"/>
                </div>
                <Button type="submit" size="lg" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold text-lg py-3.5 rounded-md shadow-md transform hover:scale-102 transition-transform duration-300">
                  <Send className="mr-2 h-5 w-5" /> Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-cyan-500">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Contact Information</h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <MapPin size={24} className="mr-4 mt-1 text-sky-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-700">Our Office</p>
                      <p className="text-slate-600">123 Placement Drive, Success City, SC 54321, India</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail size={24} className="mr-4 mt-1 text-sky-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-700">Email Us</p>
                      <a href="mailto:info@careerwaves.com" className="text-sky-600 hover:text-sky-700 hover:underline transition-colors">info@careerwaves.com</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone size={24} className="mr-4 mt-1 text-sky-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-700">Call Us</p>
                      <a href="tel:+911234567890" className="text-sky-600 hover:text-sky-700 hover:underline transition-colors">+91 12345 67890</a>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-amber-500">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Connect via WhatsApp</h3>
                <p className="text-slate-600 mb-6">
                  For a quick response, feel free to message Pavan Chowdary directly on WhatsApp.
                </p>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-lg py-3.5 rounded-md shadow-md transform hover:scale-102 transition-transform duration-300">
                    <MessageSquare className="mr-2 h-5 w-5" /> Chat on WhatsApp
                  </Button>
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-purple-500">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Follow Us</h3>
                <p className="text-slate-600 mb-4">Stay updated with our latest job postings and news:</p>
                <div className="flex space-x-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 rounded-full text-sky-600 hover:bg-sky-100 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 rounded-full text-sky-600 hover:bg-sky-100 transition-colors">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="section-padding bg-slate-100"
      >
        <div className="container mx-auto px-4">
          <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.49755859375%2C12.87890625%2C77.6953125%2C13.076171875&layer=mapnik" 
              style={{border:0, width: '100%', height: '100%'}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Career Waves Location Map"
            ></iframe>
          </div>
          <p className="text-center text-sm text-slate-500 mt-4">Please note: The map shows a general area for demonstration purposes.</p>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
  