import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import { ChevronRight, ChevronLeft,ChevronDown, Star,Quote,} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import adventureImg from "../../src/projectimages/Innovative Solutions.jpg";
import natureImg from "../../src/projectimages/team.jpg";
import techImg from "../../src/projectimages/Moderntechnology.jpg";
import artImg from "../../src/projectimages/ExpertTeam.png";
import annapurnaImg from "../../src/projectimages/Clientimages/Annapuran2.jpg";
import KarnatakaBan from "../../src/projectimages/Clientimages/KarnatakaBan.jpg";
import AxisBank from "../../src/projectimages/Clientimages/AxisBank.png";
import FederalBank from "../projectimages/Clientimages/FederalBank.png";
import Fincare from "../../src/projectimages/Clientimages/Fincare.jpg";
import HDB from "../../src/projectimages/Clientimages/HDB.jpg";
import Pirimal from "../../src/projectimages/Clientimages/Pirimal.jpg";
import SubK from "../../src/projectimages/Clientimages/SubK.png";
import EFL from "../../src/projectimages/Clientimages/EFL.png";
import UGRO from "../../src/projectimages/Clientimages/UGRO.jpg";
import APCOB from "../../src/projectimages/Clientimages/APCOB.jpg";
import Share from "../../src/projectimages/Clientimages/share.jpg";
import Kaebaku from "../../src/projectimages/Clientimages/Kaebaku.jpeg";
import krishnadistrict from "../../src/projectimages/Clientimages/krishnadistrict.png";


// import Mahashakti from "../projectimages/Clientimages/Mahashakti.jpg";
// import AAdhikar from "../projectimages/Clientimages/AAdhikar.jpg";
import Minland from "../../src/projectimages/Clientimages/Minland.jpg";
import NCML from "../../src/projectimages/Clientimages/NCML.jpg";
import Spandana from "../../src/projectimages/Clientimages/Spandana.jpg";
import ISO270012013 from "../../src/projectimages/Certifications/ISO 27001 2013.jpg";
import ISOIEC2000012018 from "../../src/projectimages/Certifications/ISO IEC 20000-1 2018.jpg";
import ISO from "../../src/projectimages/Certifications/ISO.jpg";
import CMMI from "../../src/projectimages/Certifications/CMMI.jpg";



import "../pages/css/Carousalimage.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";


import "./css/Testimonials.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Image1 from "../../src/projectimages/harishraghu.jpg";
import Image2 from "../../src/projectimages/Mohammad.jpg";
import Image3 from "../../src/projectimages/Amith.jpg";


// Styled Components
const Wrapper = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px;
`;

const Card = styled.div`
  width: 250px;
  height: 350px;
  background: ${({ bgImage }) => `url(${bgImage}) no-repeat center / cover`};
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover .fon {
    opacity: 0;
  }

  &:hover .text {
    height: 10%;
    padding: 10px 0 0;
  }

  &:hover .text h2 {
    margin-bottom: 0;
  }

  &:hover .text p {
    opacity: 0;
  }

  &:hover .btn {
    transform: scale(1);
  }

  /* Responsive: Adjust card size for smaller screens */
  @media (max-width: 768px) {
    width: 100%; /* Make cards full-width */
    max-width: 300px;
  }

  @media (max-width: 480px) {
    width: 100%; /* Full width for mobile screens */
    height: 300px; /* Reduce height */
  }
`;

const Fon = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.3;
  transition: 0.25s;
`;

const Text = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  height: 60%;
  width: 100%;
  text-align: center;
  padding: 40px 0 0;
  transition: height 0.25s, padding 0.25s;
  z-index: 4;

  h2 {
    color: #3f228c;
    letter-spacing: 1px;
    margin-bottom: 20px;
    transition: margin-bottom 0.25s;
    font-weight:500;
  }

  p {
    line-height: 20px;
    margin: 0 10px;
    color: #777;
    transition: opacity 0.25s;
    font-size: 11px;
  }
`;

const Triangle = styled.div`
  width: 100%;
  height: 31px;
  background: #fff;
  transform: matrix(1.01, -0.3, 0, 2, -1, 10);
`;

const Button = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 40px);
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
  border: 2px solid #fff;
  color: #fff;
    background: linear-gradient(135deg, #212d61, #3b4c9a);
  border-color: #212d61;
  border-radius: 4px;
  cursor: pointer;
  transform: scale(0);
  transition:
    transform 0.25s ease-in-out,
    background 0.4s ease,
    color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
 transition: transform 0.3s ease, box-shadow 0.3s ease;
 transition: top 0.3s ease;
  transition: letter-spacing 0.3s ease, background 0.4s ease;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 0 15px 3px rgba(91, 52, 204, 0.6);
      letter-spacing: 4px;
       background-position: right;
  }
`;




// Card Data
const cardsData = [
  {
    title: "Innovative Solutions",
    description:
      "Unlock groundbreaking ideas and creative strategies to solve complex challenges and drive success.",
    bgImage: adventureImg,
    link: "/Services/InnovativeSoutions",
   
  },
  {
    title: "Expert Team",
    description:
      "A highly skilled and experienced team dedicated to delivering excellence and achieving remarkable results.",
    bgImage: natureImg,
    link: "/Services/ExpertTeam",
  },
  {
    title: "Modern Technology",
    description:
      "Stay ahead with cutting-edge advancements, transforming the way we live, work, and interact with the world.",
    bgImage: techImg,
    link: "/Services/ModernTechnology",
  },
  {
    title: "Web Designing",
    description:
      "Craft visually stunning and user-friendly digital experiences that blend creativity with functionality.",
    bgImage: artImg,
    link: "/Services/WebDesigning",
  },
];


const testimonials = [
  {
    name: "Mr. Harish Raghu",
    role: "Managing Director, Saggraha",
    text: "Two decades of dedicated work by Jayam team lead by Prathap have created an Organisation of respect! An ERP suitable for retail and BoP segment is the most challenging as one end users are almost uneducated and other end users do high end analytics. In today’s world customising ERP is the biggest challenge and Jayam mastered it in core architecture. Today they are servicing large banks to small MFIs and Cooperatives showing their flexibility of design and economics.Jayam Solutions transformed our digital infrastructure with their innovative approach and exceptional expertise.",
    image: Image1
  },
  {
    name: "Mr. Samuel Chandar",
    role: "GOF, CEO",
    text: "Jayam Solutions Pvt. Ltd. is one of the leading Software Solutions and Service provider in providing Business solutions and High-End Technology based services. We highly appreciate its software services to us for bringing effectiveness in our operation as well as overall growth of the Company. We feel proud to mention that JSPL with its creative, continuous and timely services to partners has become able to establish its brand as a Global IT service provider. We wish all success of the company in its future Endeavour.",
    image: Image2
  },
  {
    name: "Mr. Amitesh Kumar",
    role: "EVP, CFO",
    text: "It gives us immense pleasure to write to you by appreciating the good work done by the Jayam team team during your Flagship Product E-Fimo implementation at Midland Microfin Ltd.i wishes to place on record the exemplary service provided by your team during this time. In the brief period that we have used your product ,E-FIMO, we have found that it provides comprehensive functional capabilities and our staff have found the application to be intuitive and easy to use. Based on our experience.",
    image: Image3
  }

];



import img1 from "../projectimages/Application Development.jpg";
import img2 from "../projectimages/CreditReport.jpg";
import img3 from "../projectimages/warehouse.jpg";
import img4 from "../projectimages/software-applicatons.jpg";
import img5 from "../projectimages/CreditReport.jpg";
import img6 from "../projectimages/warehouse.jpg";

// Slides array with ID and title
const slides = [
  { id: 1, title: "Software Products",Descrition:"Testing", img: img1 },
  { id: 2, title: "Subscription-based Products and services", img: img2 },
  { id: 3, title: "Software Projects (Customised)", img: img3 },
  { id: 4, title: "Staff Augmentation Services", img: img4 },
  { id: 5, title: "Software Testing", img: img5 },
  { id: 6, title: "ATMs & Associated Products.", img: img6 },
];

// const testimonials = [
//   {
//     name: "Mr. Harish Raghu",
//     position: "Managing Director, Saggraha",
//     image: Harish,
//     quote:
//       "Two decades of dedicated work by Jayam team lead by Prathap have created an Organisation of respect! An ERP suitable for retail and BoP segment is the most challenging as one end users are almost uneducated and other end users do high end analytics. In today’s world customising ERP is the biggest challenge and Jayam mastered it in core architecture. Today they are servicing large banks to small MFIs and Cooperatives showing their flexibility of design and economics.Jayam Solutions transformed our digital infrastructure with their innovative approach and exceptional expertise.",
//   },
//   {
//     name: "Mr. Samuel Chandar",
//     position: "GOF, CEO",
//     image: Mohammad,
//     quote:
//       "Jayam Solutions Pvt. Ltd. is one of the leading Software Solutions and Service provider in providing Business solutions and High-End Technology based services. We highly appreciate its software services to us for bringing effectiveness in our operation as well as overall growth of the Company. We feel proud to mention that JSPL with its creative, continuous and timely services to partners has become able to establish its brand as a Global IT service provider. We wish all success of the company in its future Endeavour.",
//   },
//   {
//     name: "Mr. Amitesh Kumar",
//     position: "EVP, CFO",
//     image: Amith,
//     quote:
//       "It gives us immense pleasure to write to you by appreciating the good work done by the Jayam team team during your Flagship Product E-Fimo implementation at Midland Microfin Ltd.i wishes to place on record the exemplary service provided by your team during this time. In the brief period that we have used your product ,E-FIMO, we have found that it provides comprehensive functional capabilities and our staff have found the application to be intuitive and easy to use. Based on our experience.",
//   },
// ];

const clientLogos = [
  { id: 1, src: annapurnaImg,  },
  { id: 2, src: AxisBank,  },
  { id: 3, src:HDB, },
  { id: 4, src:FederalBank ,},
  { id: 5, src:KarnatakaBan, },
  { id: 6, src:Pirimal ,},
  { id: 7, src:Minland , },
  { id: 8, src:NCML,  },
  { id: 9, src:Fincare , },
  { id: 10, src:Spandana, },
  { id: 11, src:SubK,  },
  { id: 12, src:EFL , },
  { id: 13, src:UGRO,  },
  { id: 14, src:APCOB , },
  { id: 15, src:Share , },
  { id: 16, src:Kaebaku , },
  { id: 17, src:krishnadistrict , },
  // { id: 13, src:Mahashakti, },
  // { id: 14, src:AAdhikar,  },

 

];

const certifications = [
  { src: ISO270012013, alt: "ISO270012013 " },
  { src: ISOIEC2000012018, alt: "ISOIEC2000012018" },
  { src: ISO, alt: "ISO" },
  { src: CMMI, alt: "CMMI " },

];


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1920",
      title: "Searching for scalable end-to-end solutions?",
    },
    {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920",
      title: "Looking for cost effective solutions?",
    },
    {
      url: "https://res.cloudinary.com/dijjxaphj/image/upload/v1744799751/christina-wocintechchat-com-eS72kLFS6s0-unsplash_eoz0tl.jpg",
      title: "Discover our bouquet of solutions of SME & MSME.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    new Swiper(".carousel-3D-swiper", {
      loop: true,
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 350,
        modifier: 1,
        slideShadows: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);
  return (
    <div className="min-h-screen">
      {/* Carousel Top Section */}
      <section className="relative h-screen overflow-hidden">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white px-4"
            >
              {/* SHINING TEXT EFFECT */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent animate-pulse">
                {image.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8  animate-pulse">Transform Your Business with Jayam Solutions</p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      ))}

      {/* NAVIGATION BUTTONS */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>

      {/* SCROLL DOWN ICON */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>

      {/* Features Section */}
      {/* <section className="py-20 bg-white  bg-gradient-to-b from-blue-50 to-blue"> */}
      <section className="py-2 bg-gradient-to-b from-[#c5cfdd] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl mt-4 font-bold text-gray-900 animate-pulse ">
              Why Choose Us?
            </h2>
            <p
              className="mt-3 text-xl text-gray-500 "
              style={{ fontSize: "14px" }}
            >
              Jayam Solutions is a market enabler and solution provider for SME
              and MSME sectors. We believe in benchmarking with highest quality
              products for diverse industry verticals. With our strong domain
              knowledge in diverse areas of MFI's, ERP, SCM and CRM, we intend
              to be a “One Stop Solution” for all your software needs. We offer
              Offshore Development and Consulting Services that are built to
              meet your software requirement, providing you a virtual extension
              of your own office and team.
            </p>
          </motion.div>

          <Wrapper>
      {cardsData.map((card, index) => (
        <Card key={index} bgImage={card.bgImage}>
          <Fon className="fon" />
          <Text className="text">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <Triangle />
          </Text>
          <Button className="btn" onClick={() => navigate(card.link)}>
            View
          </Button>
        </Card>
      ))}
    </Wrapper>
        </div>
      </section>


   {/* Business operations Section */}
      {/* <section className="py-20 bg-white  bg-gradient-to-b from-blue-50 to-blue"> */}
      <section className="py-2 bg-gradient-to-b from-[#c5cfdd] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl mt-4 font-bold text-gray-900 animate-pulse ">
             Jayam Business Operations
            </h2>
            <p
              className="mt-3 text-xl text-gray-500 "
              style={{ fontSize: "14px" }}
            >
              Jayam Solutions is a market enabler and solution provider for SME
              and MSME sectors. We believe in benchmarking with highest quality
              products for diverse industry verticals. With our strong domain
              knowledge in diverse areas of MFI's, ERP, SCM and CRM, we intend
              to be a “One Stop Solution” for all your software needs. We offer
              Offshore Development and Consulting Services that are built to
              meet your software requirement, providing you a virtual extension
              of your own office and team.
            </p>
          </motion.div>
      <section className="carousel-3D-swiper-section">
        <div className="carousel-3D-swiper swiper">
          <div className="swiper-wrapper max-w-[1200px]">
            {slides.map((slide) => (
              <div className="swiper-slide" key={slide.id}>
                <div className="image-wrapper aspect-video">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="aspect-video"
                  />
                </div>
                <div className="details">
                  <h3>{slide.title}</h3>
                  {/* <p>
                    This is a short description for {slide.title}. Creative and
                    powerful solutions.
                  </p> */}
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-pagination" style={{ bottom: "-50px" }}></div>
        </div>
      </section>
 
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className=" bg-gray-50  bg-gradient-to-b from-blue-50 to-blue"> */}
      {/* <section className="py-3 bg-gradient-to-b from-[#c5cfdd] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
           initial={{ y: -50, opacity: 0 }} // Start from above with opacity 0
           animate={{ y: 0, opacity: 1 }}  // Slide down into position
           transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
            className="text-center mb-5"
          >
            <h2
              className="text-3xl font-bold text-gray-900 animate-pulse"
              style={{ fontSize: "18px" }}
            > 
              What Our Clients Say
            </h2>
            <p className=" text-xl text-gray-500 animate-pulse" style={{ fontSize: "14px" }}>
              Trusted by leading companies worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="h-8 w-8 text-blue-100 absolute -top-4 -left-4" />
                  <p
                    className="text-gray-600 relative z-10"
                    style={{ fontSize: "12px" }}
                  >
                    {testimonial.quote}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    <section
  id="testimonial_area"
  style={{
    background: "linear-gradient(to bottom, #c5cfdd, #ffffff)",
    padding: "50px 0",
    color: "#000"
  }}
>
      <div  className="container ">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
           initial={{ y: -50, opacity: 0 }} // Start from above with opacity 0
           animate={{ y: 0, opacity: 1 }}  // Slide down into position
           transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
            className="text-center mb-5"
          >
            <h2
              className="text-3xl font-bold text-gray-900 animate-pulse"
              style={{ fontSize: "18px" }}
            > 
              What Our Clients Say
            </h2>
            <p className=" text-xl text-gray-500 animate-pulse" style={{ fontSize: "14px" }}>
              Trusted by leading companies worldwide
            </p>
          </motion.div>
</div>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                <div className="testimonial-box mx-auto">
                  <img src={item.image} alt={item.name} />
                  <h5>{item.name}</h5>
                  <p className="text-muted">{item.role}</p>
<p style={{ textAlign: "start" }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      <div className="circle-container">
        <div className="circle outer">
          <div className="dot">
            <img src={Image1} alt="circle" className="dot-img" />
          </div>
          <div className="circle middle">
            <div className="dot">
              <img src={Image2} alt="circle" className="dot-img" />
            </div>
            <div className="circle inner">
              <div className="dot">
                <img src={Image3} alt="circle" className="dot-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* Our Clients  marquee Section */}
    
      <div className="marquee-section"   >
      <h2 className="marquee-title animate-pulse">Our Clients</h2>
      <div className="marquee-container">
        <Marquee speed={70} pauseOnHover={true} gradient={false}>
          {clientLogos.map((client) => (
            <img
              key={client.id}
              src={client.src}
              alt={client.alt}
              className="client-logo"
            />
          ))}
        </Marquee>
      </div>
    </div>
    

      {/* Contact Info Section */}
      {/* <section className="py-16 bg-gray-50  bg-gradient-to-b from-blue-50 to-blue"> */}
      <section className="py-10 bg-gradient-to-b from-[#c5cfdd] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
           <h2
              className="text-3xl font-bold text-gray-900 animate-pulse"
              style={{ fontSize: "18px" }}
            > 
               Our Certifications   
            </h2>
            <p className=" text-xl text-gray-500 animate-pulse" style={{ fontSize: "14px" }}>
              Trusted by leading companies worldwide
            </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden   transition duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(cert.src)}
            >
              <img
  src={cert.src}
  alt={cert.alt}
  className="w-full h-49 object-contain"
/>

            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-full max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
    </div>
  );
};


export default Home;
