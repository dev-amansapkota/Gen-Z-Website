'use client'
import Navbar from './components/Navbar';
import CourseCard from './components/CourseCard';
import UniversityCard from './components/UniversityCard';
import CollegeCard from './components/CollegeCard';
import PartnerColleges from './components/PartnerColleges';
import Testimonial from './components/Testimonial';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import TrustedPlatform from './components/TrustedPlatform'



export default function Home() {

 
  return (
    <div className="min-h-screen text-zinc-700">
   
     <Navbar/>
     <Homepage/>
     <TrustedPlatform/>
     <CourseCard/>
     <CollegeCard/>
     <UniversityCard/>
     <PartnerColleges/>
     <Testimonial/>
     <FAQs/>
     <Footer/>  
      </div>
   
  );
}    