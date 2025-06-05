import  { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/Webapplication.css'; // Reuse same CSS for consistency

// Replace with your actual images
import credit1 from '../../../src/projectimages/credit report.png';
import credit2 from '../../../src/projectimages/credit-bureau.jpg';
import credit3 from '../../../src/projectimages/CreditReport.jpg';

gsap.registerPlugin(ScrollTrigger);

const CreditBureau = () => {
  const sectionRef = useRef(null);

  const images = [
    {
      src: credit1,
      title: "Data Aggregation",
      desc: "Aggregate and validate data from multiple sources to build accurate credit profiles."
    },
    {
      src: credit2,
      title: "Credit Scoring Engine",
      desc: "Deliver real-time credit scores using advanced, rule-based, or AI-driven scoring models."
    },
    {
      src: credit3,
      title: "Compliance & Security",
      desc: "Ensure adherence to regulatory standards like GDPR, CIBIL, and more with full data encryption."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.intro-animate', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.intro-animate',
          start: 'top 80%',
        },
      });

      gsap.from('.card-animate', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.image-grid',
          start: 'top 85%',
        },
      });

      gsap.from('.content-animate', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.content-animate',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="webapp-container min-h-screen pt-20" ref={sectionRef}>
      {/* Intro Section */}
      <section className="intro-section text-center">
        <div className="intro-text intro-animate">
          <h1 className="main-heading">Credit Bureau Solutions</h1>
          <p className="main-description">
            Empower financial institutions with secure, scalable, and real-time credit bureau systems. Jayam Solutions offers comprehensive credit reporting platforms that streamline decision-making and enhance risk assessment capabilities.
          </p>
        </div>
      </section>

      {/* Card Section */}
      <section className="gallery-section">
        <div className="image-grid">
          {images.map((item, idx) => (
            <div key={idx} className="image-card card-animate">
              <img
                src={item.src}
                alt={item.title}
                className="card-image object-contain"
              />
              <div className="card-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Info Section */}
      <section className="intro-section mt-12">
        <div className="text-center intro-text content-animate">
          <p className="main-description">
            Our Credit Bureau solutions are tailored for financial institutions, NBFCs, and fintech companies looking to build secure and intelligent credit infrastructures. From credit application tracking to integrated reporting with third-party bureaus, our platform delivers high-performance tools that are trusted by institutions globally.
            <br /><br />
            We offer:
            <ul style={{ marginTop: '1rem', listStyle: 'disc', paddingLeft: '2rem', textAlign: 'left' }}>
              <li>Automated credit evaluation pipelines</li>
              <li>Custom rule engines and AI scorecards</li>
              <li>Seamless integration with national bureaus</li>
              <li>Secure APIs and user permission controls</li>
            </ul>
            Let us help you transform your credit data into actionable insights.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CreditBureau;
