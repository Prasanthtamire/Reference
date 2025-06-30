import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, ValidationError } from '@formspree/react';
import '../pages/css/Salescontact.css';
const Contact = () => {
  const [state, handleSubmit] = useForm("mwpbpvep");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen ">
      <section className="py-4 bg-gradient-to-b from-[#c5cfdd] to-white">
        <div className="flex justify-center mb-1 ">
  <img
    src="../../src/projectimages/Contactpage.jpg" // Replace this with your actual image path
    alt="Contact Banner"
    className="w-full max-h-64  shadow-md "
    style={{ marginTop: "0px",height:"100vh", }}

  />
</div>
<p className="subheading" style={{ marginBottom:"5px" }}>Ready to get started with Jayam Solutions ?</p>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-5"
          >
            {/* <h1 className="text-4xl font-bold text-gray-900" style={{ fontSize: "18px" }}>
              Get in touch with our team
            </h1>
            <p className="text-xl text-gray-500" style={{ fontSize: "14px" }}></p> */}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontSize: "18px" }}>
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900" style={{ fontSize: "16px" }}>Email</h3>
                      <p className="text-gray-500" style={{ fontSize: "14px" }}>contact@jayamsolutions.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900" style={{ fontSize: "16px" }}>Phone</h3>
                      <p className="text-gray-500" style={{ fontSize: "14px" }}>+91 9848022338</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900" style={{ fontSize: "16px" }}>Location</h3>
                      <p className="text-gray-500" style={{ fontSize: "14px" }}>
                        Jayam Nilayam, Plot No: 277, Anjaneya Nagar Colony, Moosapet,<br />
                        Hyderabad, Telangana, India - 500018
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-2 ml-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-1" style={{ fontSize: "16px" }}>Office Hours</h3>
                  <div className="space-y-1 text-gray-500" style={{ fontSize: "14px" }}>
                    <p>Monday - Friday: 10:00 AM - 7:15 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form or Success Message */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ fontFamily: "'Poppins', sans-serif" }}>
                {state.succeeded ? (
                  <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-green-600" style={{ fontSize: "18px" }}>
                      Thanks for your message!
                    </h2>
                    <p className="text-gray-500 mt-2">We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
                    <h2 className="text-2xl font-bold text-gray-900" style={{ fontSize: "16px" }}>
                      Send us a Message
                    </h2>

                    <div className="space-y-3 mt-2">
                      <TextField
                        label="Name"
                        variant="standard"
                        fullWidth
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        InputProps={{ style: { fontFamily: "'Poppins', sans-serif" } }}
                        InputLabelProps={{ style: { fontFamily: "'Poppins', sans-serif" } }}
                      />

                      <TextField
                        label="Email"
                        variant="standard"
                        fullWidth
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        InputProps={{ style: { fontFamily: "'Poppins', sans-serif" } }}
                        InputLabelProps={{ style: { fontFamily: "'Poppins', sans-serif" } }}
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />

                      <TextField
                        label="Subject"
                        variant="standard"
                        fullWidth
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        InputProps={{ style: { fontFamily: "'Poppins', sans-serif" } }}
                        InputLabelProps={{ style: { fontFamily: "'Poppins', sans-serif" } }}
                      />

                      <TextField
                        label="Message"
                        variant="standard"
                        fullWidth
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        InputProps={{ style: { fontFamily: "'Poppins', sans-serif" } }}
                        InputLabelProps={{ style: { fontFamily: "'Poppins', sans-serif" } }}
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          endIcon={<Send />}
                          disabled={state.submitting}
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {state.submitting ? "Sending..." : "Send Message"}
                        </Button>
                      </motion.div>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          {/* Google Maps & Directions */}
          <div className="mt-3">
            <div className="mb-2 flex items-center gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                alt="Directions Icon"
                style={{ width: "20px", height: "20px" }}
              />
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=17.4726,78.4177"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "16px",
                  color: "#1d4ed8",
                  fontWeight: "500",
                  textDecoration: "underline"
                }}
              >
                Get Directions
              </a>
            </div>

            <iframe
              title="Jayam Solutions Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15224.28814280283!2d78.4177!3d17.4726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI4JzIxLjQiTiA3OMKwMjUnMDMuOCJF!5e0!3m2!1sen!2sin!4v1717433320000!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
