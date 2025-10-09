'use client';
import { useRef } from 'react'; 
import Navbar from '@/src/components/Navbar/Navbar.jsx';
import Hero from '@/src/components/Hero/Hero.jsx';
import './page.css';
import BrandingVideo from '@/src/components/Branding_Video/Branding_Video';
import What_We_Do from '@/src/components/What_We_Do/What_We_Do';
import How_We_Differ from '@/src/components/How_We_Differ/How_We_Differ';
import { motion, useAnimation } from 'framer-motion';
import How_It_Works from '@/src/components/How_It_Works/How_It_Works';
import Who_We_Target from '@/src/components/Who_We_Target/Who_We_Target';
import Testimonials from '@/src/components/Testimonials/Testimonials';
import Footer from '@/src/components/Footer/Footer';

export default function Home() {
  const controls = useAnimation();
  const scrollRef = useRef(null); 

  return (
    <motion.div 
      className="app" 
      initial={{ backgroundColor: "var(--primary-color)" }}
      animate={controls}
    >
      <main className="scroll-container" ref={scrollRef}>

        <section className="scroll-section first-section">
          <Navbar />
          <div className="hero-wrapper">
            <Hero />
          </div>
        </section>

        <section className="scroll-section middle-section">
          <BrandingVideo />
        </section>

        <section className="scroll-section middle-section">
          <What_We_Do />
        </section>

        <section className="scroll-section middle-section">
          <motion.div
            className="h-full w-full flex items-center justify-center"
            onViewportEnter={() => controls.start({ backgroundColor: "var(--secondary-color)" })}
            onViewportLeave={() => controls.start({ backgroundColor: "var(--primary-color)" })} 
            viewport={{ root: scrollRef, amount: 0.5 }} 
          >
            <How_We_Differ />
          </motion.div>
        </section>

        <section className="scroll-section middle-section">
          <How_It_Works />
        </section>

        <section className="scroll-section middle-section">
          <motion.div
            className="h-full w-full flex items-center justify-center"
            onViewportEnter={() => controls.start({ backgroundColor: "var(--secondary-color)" })}
            onViewportLeave={() => controls.start({ backgroundColor: "var(--primary-color)" })}
            viewport={{ root: scrollRef, amount: 0.5 }}
          >
            <Who_We_Target />
          </motion.div>
        </section>

        <section className="scroll-section tall-content-section">
          <Testimonials />
        </section>
        
        <section className="scroll-section last-section">
          <Footer />
        </section>

      </main>
    </motion.div>
  );
}
