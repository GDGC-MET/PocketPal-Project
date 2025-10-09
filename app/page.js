'use client';
import Navbar from '@/src/components/Navbar/Navbar.jsx';
import Hero from '@/src/components/Hero/Hero.jsx';
import './page.css'
import BrandingVideo from '@/src/components/Branding_Video/Branding_Video';
import What_We_Do from '@/src/components/What_We_Do/What_We_Do';
import How_We_Differ from '@/src/components/How_We_Differ/How_We_Differ';
import {motion, useAnimation} from 'framer-motion';
import How_It_Works from '@/src/components/How_It_Works/How_It_Works';
import Who_We_Target from '@/src/components/Who_We_Target/Who_We_Target';
import Testimonials from '@/src/components/Testimonials/Testimonials';
import Footer from '@/src/components/Footer/Footer';
export default function Home() {
  const controls = useAnimation()
  return (
    <motion.div className="app" animate={controls}>
      <Navbar/>
      <Hero/>
      <BrandingVideo/>
      <What_We_Do/>
      <motion.div 
      onViewportEnter={()=> controls.start({backgroundColor: "var(--secondary-color)",})
      }
      onViewportLeave={()=> controls.start({backgroundColor:"var(--primary-color)",})
      }
      viewport={{amount:0.2}}
      > 
      <How_We_Differ/>
      </motion.div>
      <How_It_Works/>
      <motion.div 
      onViewportEnter={()=> controls.start({backgroundColor: "var(--secondary-color)",})
      }
      onViewportLeave={()=> controls.start({backgroundColor:"var(--primary-color)",})
      }
      viewport={{amount:0.2}}
      > 
      <Who_We_Target/>
      </motion.div>
      <Testimonials/>
      <Footer/>
    </motion.div>
  );
}
