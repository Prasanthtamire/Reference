import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Heart, Users } from 'lucide-react';
// import "../pages/css/carrer.css"
const Careers = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-b from-[#c5cfdd] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold text-gray-900" style={{fontSize:"18px"}}>Join Our Team</h1>
            <p className="mt-1 text-xl text-gray-500" style={{fontSize:"16px"}}>Build your career with innovation and excellence</p>
          </motion.div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1" style={{fontSize:"16px"}}>{benefit.title}</h3>
                <p className="text-gray-600" style={{fontSize:"12px"}}>{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-5">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{fontSize:"18px"}}>Open Positions</h2>
            <div className="space-y-6">
              {openings.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900" style={{fontSize:"16px"}}>{job.title}</h3>
                      <p className="text-gray-600 mt-1"style={{fontSize:"14px"}}>{job.location}</p>
                    </div>
                    <button className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                      Apply Now
                    </button>
                  </div>
                  <div className="mt-1">
                    <p className="text-gray-600" style={{fontSize:"14px"}}>{job.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2" >
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const benefits = [
  {
    title: "Career Growth",
    description: "Clear career progression paths and continuous learning opportunities",
    icon: <GraduationCap className="h-6 w-6" />
  },
  {
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options",
    icon: <Heart className="h-6 w-6" />
  },
  {
    title: "Great Culture",
    description: "Collaborative environment with innovative mindset",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Benefits Package",
    description: "Competitive salary and comprehensive benefits",
    icon: <Briefcase className="h-6 w-6" />
  }
];

const openings = [
  {
    title: "Senior Full Stack Developer",
    location: "Remote / Hybrid",
    description: "We're looking for an experienced Full Stack Developer to join our growing team.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"]
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    description: "Seeking a DevOps Engineer to help us build and maintain our cloud infrastructure.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
  },
  {
    title: "UI/UX Designer",
    location: "Hybrid",
    description: "Join us in creating beautiful and intuitive user experiences.",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"]
  }
];

export default Careers;