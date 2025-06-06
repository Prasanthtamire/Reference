import { Users2, Trophy, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import pvnPratap from '../../src/projectimages/pvn_pratap.png';
import rojaRani from '../../src/projectimages/rojarani.png';
import ksMadhav from '../../src/projectimages/ks_madhav.png';
import ramusir from '../../src/projectimages/ramusir.jpg';
import suneethamam from '../../src/projectimages/suneethamam.jpg';
import rajusir from '../../src/projectimages/rajusir.jpg';
import Mahesh from '../../src/projectimages/Womendummy.jpg';
import Harikrishna from '../../src/projectimages/Harikrishna.jpeg';
import Praveen from '../../src/projectimages/Praveen Kumar .jpeg';
import SatyaKumar from '../../src/projectimages/SatyaKumar.jpeg';

import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"; // Import social media icons


const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      {/* <section className="py-10 bg-gradient-to-b from-blue-50 to-white"> */}
      {/* <section className="py-10 bg-gradient-to-b from-[rgb(130, 149, 173)] to-[rgb(182, 164, 164)]"> */}
      <section className="py-10 bg-gradient-to-b from-[#c5cfdd] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            
            {/* Left Section with Text and Stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-extrabold text-gray-900">About Jayam Solutions</h1>
              <p className="mt-4 text-lg text-gray-500" style={{ fontSize: "12px" }}>
                At Jayam Solutions, we're passionate about helping businesses succeed through technology. 
                With years of experience and a team of skilled professionals, we deliver innovative solutions 
                that drive growth and efficiency.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white p-4 rounded-lg shadow-md text-center"
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Section with Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-10 lg:mt-0"
            >
              <img 
                className="rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      {/* <section className="py-5 bg-white  bg-gradient-to-b from-blue-50 to-blue"> */}
      <section className="py-10 bg-gradient-to-b from-[#c5cfdd] to-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <h2 className="text-3xl font-bold text-gray-900" style={{ fontSize: "20px" }}>
            Board of Directors
          </h2>
          <p className="text-xl text-gray-500" style={{ fontSize: "16px" }}>
            Leadership that drives innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors.map((director, index) => (
            <motion.div
              key={director.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Profile Image */}
              <img
                src={director.image}
                alt={director.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />

              {/* Name */}
              <h3 className="text-xl font-semibold text-gray-900 text-center" style={{ fontSize: "18px" }}>
                {director.name}
              </h3>

              {/* Position */}
              <p className="text-blue-600 text-center mb-2" style={{ fontSize: "14px" }}>
                {director.position}
              </p>

              {/* Description */}
              <p className="text-gray-500 text-center" style={{ fontSize: "14px" }}>
                {director.description}
              </p>

              {/* Social Media Links with Icons & Colors */}
              {director.social && director.social.length > 0 && (
                <div className="flex justify-center space-x-4 mt-4">
                  {director.social.map((link) => {
                    let Icon;
                    let color;

                    if (link.platform === "linkedin") {
                      Icon = FaLinkedin;
                      color = "#0077B5"; // LinkedIn Blue
                    }
                    if (link.platform === "instagram") {
                      Icon = FaInstagram;
                      color = "#E1306C"; // Instagram Pink
                    }
                    if (link.platform === "twitter") {
                      Icon = FaTwitter;
                      color = "#1DA1F2"; // Twitter Blue
                    }

                    return (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-110"
                      >
                        {Icon && <Icon size={24} style={{ color }} />}
                      </a>
                    );
                  })}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Technical Team Section */}
      {/* <section className="py-5 bg-gray-50  bg-gradient-to-b from-blue-50 to-blue"> */}
      <section className="py-10 bg-gradient-to-b from-[#c5cfdd] to-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="text-3xl font-bold text-gray-900"  style={{ fontSize: "20px" }}>Technical Team</h2>
            <p className=" text-xl text-gray-500"  style={{ fontSize: "16px" }}>The experts behind our Success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 text-center" style={{ fontSize: "16px" }}>{member.name}</h3>
                <p className="text-gray-600 text-start mb-2" style={{ fontSize: "14px" }}>
                  {member.position}
                </p>
                {/* <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Development Team */}
      {/* <section className="py-5 bg-white  bg-gradient-to-b from-blue-50 to-blue"> */}
      {/* <section className="py-10 bg-gradient-to-b from-[#c5cfdd] to-white"> */}
      <section className="py-10 bg-gradient-to-b from-[#c5cfdd] to-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="text-3xl font-bold text-gray-900"  style={{ fontSize: "20px" }}>Business Development Team</h2>
            <p className=" text-xl text-gray-500"  style={{ fontSize: "14px" }}>Driving growth and partnerships</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {businessTeam.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {/* Profile Image */}
          <img
            src={member.image}
            alt={member.name}
            className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
          />

          {/* Name */}
          <h3 className="text-xl font-semibold text-gray-900 text-center" style={{ fontSize: "16px" }}>
            {member.name}
          </h3>

          {/* Position */}
          <p className="text-blue-600 text-center mb-2" style={{ fontSize: "14px" }}>
            {member.position}
          </p>

          {/* Description */}
          <p className="text-gray-500 text-center" style={{ fontSize: "14px" }}>
            {member.description}
          </p>

          {/* Social Media Links with Icons & Colors */}
          {member.social && member.social.length > 0 && (
            <div className="flex justify-center space-x-4 mt-4">
              {member.social.map((link) => {
                let Icon;
                let color;

                if (link.platform === "linkedin") {
                  Icon = FaLinkedin;
                  color = "#0077B5"; // LinkedIn Blue
                }
                if (link.platform === "instagram") {
                  Icon = FaInstagram;
                  color = "#E1306C"; // Instagram Pink
                }
                if (link.platform === "twitter") {
                  Icon = FaTwitter;
                  color = "#1DA1F2"; // Twitter Blue
                }

                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                  >
                    {Icon && <Icon size={24} style={{ color }} />} {/* Render the icon with color */}
                  </a>
                );
              })}
            </div>
          )}
        </motion.div>
      ))}
    </div>
        </div>
      </section>

    

      {/* Values Section */}
      {/* <section className="py-10 bg-white  bg-gradient-to-b from-blue-50 to-blue"> */}
      <section className="py-10 bg-gradient-to-b from-[#c5cfdd] to-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            <h2 className="text-3xl font-bold text-gray-900"  style={{ fontSize: "18px" }}>Our Values</h2>
            <p className=" text-xl text-gray-500"  style={{ fontSize: "14px" }}>The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2" style={{ fontSize: "16px" }}>{value.title}</h3>
                <p className="text-gray-500 text-center" style={{ fontSize: "14px" }}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


// 👇 AnimatedCounter Component
const AnimatedCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const duration = 1500; // 1.5 seconds total
    const incrementTime = 30;
    const step = Math.ceil((end / duration) * incrementTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-3xl font-bold text-blue-600">
      {count}
      {suffix}
    </div>
  );
};



const stats = [
  { value: 23, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 350, suffix: "+", label: "Employees" },
  { value: 100, suffix: "%", label: "Client Satisfaction" }
];

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, delivering the highest quality solutions.",
    icon: <Trophy className="h-6 w-6" />
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and innovative approaches to solve complex problems.",
    icon: <Zap className="h-6 w-6" />
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients to ensure their success is our success.",
    icon: <Users2 className="h-6 w-6" />
  },
  {
    title: "Results-Driven",
    description: "We focus on delivering measurable results that drive business growth.",
    icon: <Target className="h-6 w-6" />
  }
];

const directors = [
  {
    name: "pvn_pratap",
    position: "Managing Director",
    image: pvnPratap,
    description: "Production Engineer with Twenty Three years of functional expertise in Management.",
    social: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/pratap-pvn-68b08b5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BV2l29fSsTRaGtQjr0%2FSRDw%3D%3D" },
      { platform: "instagram", url: "https://instagram.com/prasanth_tamire" },
      { platform: "twitter", url: "https://twitter.com/johndoe" }
    ]
  },
  {
    name: "rojarani",
    position: "Information Technology Officer",
    image: rojaRani,
    description: "Is an MCA having seventeen years of experience in Information Technology.",
    social: [
      { platform: "linkedin", url: "https://www.linkedin.com" },
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "twitter", url: "https://twitter.com/johndoe" }
    ]
  },
  {
    name: "ks_madhav",
    position: "Production Engineer",
    image: ksMadhav,
    description: "Production Engineer with Twenty Three years of experience in Information Technology domain and presently based at Atlanta, USA working as a SAP consultant.",
    social: [
      { platform: "linkedin", url: "https://www.linkedin.com" },
      { platform: "instagram", url: "https://instagram.com" },
      { platform: "twitter", url: "https://twitter.com/johndoe" }
    ]
  }
];

const technicalTeam = [
  {
    name: "Mr. S.Rama Subba Reddy",
    position: "Vice President (Technical), is a Production Engineering Graduate with Twenty years of Experience in Development of the software solutions.",
    image: ramusir,
    skills: ["Cloud Architecture", "Microservices", "DevOps", "AWS"]
  },
  {
    name: "Mrs. Suneetha Pulivarthi",
    position: "Vice President (Quality and Delivery), is a post graduate in Master of Computer Applications having seventeen years of experience in ERP Microsoft Dynamics.",
    image: suneethamam,
    skills: ["React", "Node.js", "Python", "MongoDB"]
  },
  {
    name: "Mr. Hari Krishna  Chandaluri ",
    position: " Project Manager  Applications having seventeen years of experience in API Microsoft Dynamics.",
    image: Harikrishna,
    skills: ["APi Developer", "Backend", "AI", "Data Science"]
  },
  {
    name: "Mr. Praveen Kumar Thiruveedhi ",
    position: "Project Manager(Technical), is a Production Engineering Graduate with Twenty years of Experience in Development of the software solutions.",
    image:Praveen,
    skills: ["UI Design", "User Research", "Figma", "Adobe XD"]
  }
];

const businessTeam = [
  {
    name: "Mr. S.R.N.RamaChandra Raju",
    position: "Business Development",
    image: rajusir,
    description: "Vice President (Business Development), is an Engineering Graduate with Masters in Business Management with Twenty Four years of Experience in Techno Marketing of the Products.",
    social: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/srn-raju-1b12095?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHSKfnXoHSYCeJFiC%2FAE45w%3D%3D" },
      { platform: "instagram", url: "https://instagram.com/prasanth_tamire" },
      { platform: "twitter", url: "https://twitter.com/johndoe" }
    ]
  },
  {
    name:  "Mr. Satya Kumar Peddinti",
    position: "Marketing Manager",
    image: SatyaKumar,
    description: "Driving our brand strategy and digital marketing campaigns.",
    social: [
      { platform: "linkedin", url: "https://linkedin.com/in/johndoe" },
      { platform: "instagram", url: "https://instagram.com/johndoe" },
      { platform: "twitter", url: "https://twitter.com/johndoe" }
    ]
  },
  {
    name: "Mr.Jagadeesh Rao ",
    position: "CEO",
    image: Mahesh,
    description: "Spearheading our sales strategies and client relationships.",
    social: [
      { platform: "linkedin", url: "https://linkedin.com/in/johndoe" },
      { platform: "instagram", url: "https://instagram.com/johndoe" },
      { platform: "twitter", url: "https://twitter.com/johndoe" }
    ]
  }
];



export default About;









