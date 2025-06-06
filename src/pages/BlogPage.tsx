import { motion } from "framer-motion";
import "../pages/css/BlogPage.css";
import adventureImg from "../../src/projectimages/Innovative Solutions.jpg";
import natureImg from "../../src/projectimages/team.jpg";
import techImg from "../../src/projectimages/Moderntechnology.jpg";
const blogs = [
  {
    id: 1,
    title: "The Future of AI",
    description:
      "Artificial Intelligence is transforming industries at a rapid pace, making businesses smarter and more efficient.",
    image: adventureImg,
  },
  {
    id: 2,
    title: "Blockchain Revolution",
    description:
      "Blockchain technology is redefining trust and security in digital transactions and beyond.",
    image:natureImg ,
  },
  {
    id: 3,
    title: "The Rise of No-Code Platforms",
    description:
      "No-code development platforms empower users to create apps without writing a single line of code.",
    image: techImg,
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Title Animation */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold text-center mb-10"
      >
        Tech Insights & Blogs
      </motion.h1>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="text-gray-400 mt-2">{blog.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

