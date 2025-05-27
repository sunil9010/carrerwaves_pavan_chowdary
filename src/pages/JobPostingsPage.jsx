
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Briefcase, MapPin, CalendarDays, PlusCircle, Search, ExternalLink, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const initialJobs = [
  { id: 1, title: "Senior React Developer", company: "Tech Solutions Inc.", location: "Bangalore, India", type: "Full-time", postedDate: "2025-05-18", description: "Seeking an experienced React Developer to build cutting-edge web applications. Strong proficiency in JavaScript, React, and Redux required.", skills: ["React", "JavaScript", "Redux", "HTML", "CSS"] },
  { id: 2, title: "Python Django Developer", company: "Innovate Hub", location: "Hyderabad, India", type: "Full-time", postedDate: "2025-05-17", description: "Join our dynamic team as a Python Django Developer. Experience with REST APIs and database management is a plus.", skills: ["Python", "Django", "REST API", "PostgreSQL"] },
  { id: 3, title: "Digital Marketing Specialist", company: "MarketPro Connect", location: "Remote", type: "Contract", postedDate: "2025-05-19", description: "Looking for a creative Digital Marketing Specialist to manage SEO, SEM, and social media campaigns.", skills: ["SEO", "SEM", "Social Media Marketing", "Google Analytics"] },
  { id: 4, title: "HR Executive (Freshers)", company: "PeopleFirst HR", location: "Chennai, India", type: "Full-time", postedDate: "2025-05-15", description: "Exciting opportunity for freshers to start their career in Human Resources. Good communication skills are essential.", skills: ["Communication", "MS Office", "Recruitment Basics"] },
];

const JobPostingsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newJob, setNewJob] = useState({ title: '', company: '', location: '', type: 'Full-time', description: '', skills: '' });
  const { toast } = useToast();

  useEffect(() => {
    const storedJobs = localStorage.getItem('careerWavesJobs');
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    } else {
      setJobs(initialJobs);
      localStorage.setItem('careerWavesJobs', JSON.stringify(initialJobs));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
  };

  const handleAddJob = (e) => {
    e.preventDefault();
    if (!newJob.title || !newJob.company || !newJob.location || !newJob.description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    const jobToAdd = { 
      ...newJob, 
      id: Date.now(), 
      postedDate: new Date().toISOString().split('T')[0],
      skills: newJob.skills.split(',').map(skill => skill.trim()).filter(skill => skill) 
    };
    const updatedJobs = [jobToAdd, ...jobs];
    setJobs(updatedJobs);
    localStorage.setItem('careerWavesJobs', JSON.stringify(updatedJobs));
    setNewJob({ title: '', company: '', location: '', type: 'Full-time', description: '', skills: '' });
    setShowForm(false);
    toast({
      title: "Success!",
      description: "New job posting added.",
    });
  };

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="bg-slate-100 min-h-screen section-padding">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Current <span className="gradient-text">Job Openings</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore exciting career opportunities. We post new jobs daily.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex flex-col sm:flex-row gap-4 items-center"
        >
          <div className="relative flex-grow w-full sm:w-auto">
            <Input 
              type="text" 
              placeholder="Search by title, company, location, or skill..."
              className="pl-10 text-lg py-6 border-slate-300 focus:border-sky-500 focus:ring-sky-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
          </div>
          <Button onClick={() => setShowForm(!showForm)} className="bg-sky-500 hover:bg-sky-600 text-white text-md py-3 px-6 w-full sm:w-auto">
            <PlusCircle className="mr-2 h-5 w-5" />
            {showForm ? 'Cancel Post' : 'Post New Job'}
          </Button>
        </motion.div>
        
        <div className="mb-8 p-4 bg-sky-50 border-l-4 border-sky-500 rounded-md">
          <div className="flex items-start">
            <Info className="h-5 w-5 text-sky-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-sky-700 font-semibold">For Job Posters:</p>
              <p className="text-sm text-sky-600">
                The "Post New Job" feature currently saves data to your browser's local storage. For a persistent and shareable job board, a database solution like Supabase is recommended. Contact us to implement this.
              </p>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="mb-10 overflow-hidden"
            >
              <Card className="bg-white shadow-xl border-sky-500 border-t-4">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-700">Add New Job Posting</CardTitle>
                  <CardDescription>Fill in the details for the new job position.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddJob} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="title" className="text-slate-600">Job Title</Label>
                        <Input id="title" name="title" value={newJob.title} onChange={handleInputChange} placeholder="e.g., Software Engineer" required className="mt-1"/>
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-slate-600">Company Name</Label>
                        <Input id="company" name="company" value={newJob.company} onChange={handleInputChange} placeholder="e.g., Acme Corp" required className="mt-1"/>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="location" className="text-slate-600">Location</Label>
                        <Input id="location" name="location" value={newJob.location} onChange={handleInputChange} placeholder="e.g., New York, NY or Remote" required className="mt-1"/>
                      </div>
                      <div>
                        <Label htmlFor="type" className="text-slate-600">Job Type</Label>
                        <select id="type" name="type" value={newJob.type} onChange={handleInputChange} className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                          <option>Full-time</option>
                          <option>Part-time</option>
                          <option>Contract</option>
                          <option>Internship</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="description" className="text-slate-600">Job Description</Label>
                      <Textarea id="description" name="description" value={newJob.description} onChange={handleInputChange} placeholder="Brief description of the role and responsibilities..." required className="mt-1 min-h-[120px]"/>
                    </div>
                     <div>
                        <Label htmlFor="skills" className="text-slate-600">Skills (comma-separated)</Label>
                        <Input id="skills" name="skills" value={newJob.skills} onChange={handleInputChange} placeholder="e.g., React, Node.js, Project Management" className="mt-1"/>
                      </div>
                    <div className="flex justify-end space-x-3">
                       <Button type="button" variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
                       <Button type="submit" className="bg-sky-500 hover:bg-sky-600 text-white">Add Job</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {filteredJobs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full rounded-lg overflow-hidden border-l-4 border-sky-500">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-slate-800">{job.title}</CardTitle>
                      <CardDescription className="text-sky-600 font-medium">{job.company}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-slate-600 flex-grow">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-slate-500" /> {job.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2 text-slate-500" /> {job.type}
                      </div>
                       <div className="flex items-center">
                        <CalendarDays className="h-4 w-4 mr-2 text-slate-500" /> Posted: {formatDate(job.postedDate)}
                      </div>
                      <p className="pt-2 leading-relaxed">{job.description.substring(0, 120)}{job.description.length > 120 ? '...' : ''}</p>
                       {job.skills && job.skills.length > 0 && (
                        <div className="pt-2">
                          <p className="font-medium text-slate-700 mb-1">Key Skills:</p>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map(skill => (
                              <span key={skill} className="bg-sky-100 text-sky-700 px-2 py-1 rounded-full text-xs font-medium">{skill}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button variant="default" className="w-full bg-sky-500 hover:bg-sky-600 text-white">
                        Apply Now <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <img  src="/no-jobs-found.svg" alt="No jobs found" className="mx-auto mb-6 w-48 h-48" src="https://images.unsplash.com/photo-1617854818583-09e7f077a156" />
            <h3 className="text-2xl font-semibold text-slate-700 mb-2">No Jobs Found</h3>
            <p className="text-slate-500">
              {searchTerm ? "Try adjusting your search terms or check back later for new openings." : "There are currently no job postings. Please check back soon!"}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default JobPostingsPage;
  