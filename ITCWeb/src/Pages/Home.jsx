"use client";
import { motion } from "framer-motion";
import react from 'react'
import Header from './Components/Header'
import {ImagesSlider} from './Components/ui/images-slider';
import StarBorder from "./Components/StarBorder/StarBorder";
import ShinyText from '../components/ui/ShinyText/ShinyText';
import LogoWall from '../components/ui/LogoWall/LogoWall';


import { Carousel } from '../components/ui/carousel';
import Footer from './Components/Footer'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from '../components/ui/sheet'

  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion"



export default function Home() {
    const images1 = [
        "https://lh3.googleusercontent.com/pw/AP1GczM3XCA505Jfn8incCIQvgLdtEbOny9stv026iFAQnuE5rmy6ZzmUPfbiXQZa5Pvt6XoM060RWjpgq1ne4bwRUNn0zgDz_82RAPycFPzkId3o__zOqAc3kytSPRP47mwaB9vanv8aOQ2Xnl532-fPr4=w1455-h970-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczN5jedpL36KyoHMSfffb2G1AJeWY0nlDHqjgQhhAHIr2xd8-PKdmNH9GL2nMKdxF6ryJn_Dk-cixVPTm3Uizb4B2ZZgpyOK83JcbbUmzivlXfyOHF_By6UuVbJl1x-BPHIgoh6L0Oq_bivIO13bOs4=w1455-h970-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczOshfa8fHfSWSMdTM3ybHYKRioVNr8Tja27dBYFTMMNH3lr8VPnXCkVTbL7F9Ah0i75vUGm8nQbqbDMGrP4WHZzjxqOiCyeTj6-LKqPvQi9rpb0c2uG-LKZGMzDwAHULiqcI42hPGYOpIvexTz5Awo=w1455-h970-s-no-gm?authuser=0",
      ];

      const images2 = [
        {
          id: 1,
          image: '../../public/VGS02418.JPG'
        },
        {
          id: 2,
          image: '../../public/VGS02437.JPG'
        },
        {
          id: 3,
          image: '../../public/VGS02444.JPG'
        },
        {
          id: 4,
          image: '../../public/VGS02452.JPG'
        },
        {
          id: 5,
          image: '../../public/VGS02453.JPG'
        }
      ];

      const logoImgs = [
        { imgUrl: "../../public/ieeeblr.png", altText: "IEEE BLR SOCIETY" },
        { imgUrl: "../../public/IESA.jpg", altText: "React Bits Logo" },
        { imgUrl: "../../public/images.png", altText: "React Bits Logo" },
        { imgUrl: "../../public/1630572795938.jpg", altText: "React Bits Logo" },
        { imgUrl: "../../public/ieeeblr.png", altText: "IEEE BLR SOCIETY" },
        { imgUrl: "../../public/IESA.jpg", altText: "React Bits Logo" },
        { imgUrl: "../../public/images.png", altText: "React Bits Logo" },
        { imgUrl: "../../public/1630572795938.jpg", altText: "React Bits Logo" },
        
      ];
      
    return <>
    
        <Header/>
        
        <div className="absolute top-0" style={{width:"100vw", zIndex:"-1"}}>
        <ImagesSlider className="h-[40rem]" images={images1} >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 flex flex-col gap-4">
        <div>Welcome to the 9th Edition of IEEE </div> <div>International Test Conference-India</div>
        </motion.p>
        
      </motion.div>
      
    </ImagesSlider>
        </div>
        <div className="flex flex-row justify-center lg:mt-[20rem] md:mt-[23rem] mt-[17rem]">
        <a href="#" style={{zIndex:"50"}}>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>CALL FOR PAPERS IS LIVE NOW →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
        </a>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-12 md:gap-0 lg:gap-0 justify-around mt-56">
        <a href="https://www.google.com">
        <StarBorder
  className=""
  color="lightgreen"
  speed="3s"
>
    <div className="flex flex-row gap-6">
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
<div className="flex flex-col text-left ">
        <div className="font-bold text-2xl text-green-500">Location</div>
        <div className="text-lg ">Bengaluru, India</div>
</div>  
    </div>
  
</StarBorder>
        </a>

<StarBorder
  className=""
  color="lightgreen"
  speed="3s"
>
  <div className="flex flex-row gap-6">
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-calendar-event-fill" viewBox="0 0 16 16">
  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"/>
</svg>
<div className="flex flex-col text-left ">
        <div className="font-bold text-2xl text-green-500">Date</div>
        <div className="text-lg ">20'July - 23'July , 2025</div>
</div>
  </div>
</StarBorder>

        </div>
        <div className="z-5">
        <Sheet>
  <SheetTrigger
    className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-l-lg shadow-lg"
    style={{ height: "50px", width: "50px", borderBottomLeftRadius:"10px", borderTopLeftRadius:"10px" }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
  </SheetTrigger>
  <SheetContent className="bg-black ">
    <SheetHeader>
      <SheetTitle className="text-white font-semibold text-3xl">Additional Links</SheetTitle>
      <SheetDescription className="text-white">
      <Accordion type="single" collapsible className="w-full mt-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-2xl">Conference</AccordionTrigger>
        <AccordionContent>
          <ul className="list-none ml-4 ">
            <li>
                <a href="" className="hover:text-green-500 text-xl ">Latest Agenda</a>
            </li>
            <li className="mt-2">
            <a href="" className="hover:text-green-500 text-xl">Tutorial Program</a>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-2xl">Submissions</AccordionTrigger>
        <AccordionContent>
          <ul className="list-none ml-4 ">
            <li>
                <a href="" className="hover:text-green-500 text-xl">Latest Agenda</a>
            </li>
            <li className="mt-2">
            <a href="" className="hover:text-green-500 text-xl">Tutorial Program</a>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-2xl">General Information</AccordionTrigger>
        <AccordionContent>
          <ul className="list-none ml-4 ">
            <li>
                <a href="" className="hover:text-green-500 text-xl ">Latest Agenda</a>
            </li>
            <li className="mt-2">
            <a href="" className="hover:text-green-500 text-xl">Tutorial Program</a>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-2xl">ITC Archives</AccordionTrigger>
        <AccordionContent>
          <ul className="list-none ml-4 ">
            <li>
                <a href="" className="hover:text-green-500 text-xl ">Latest Agenda</a>
            </li>
            <li className="mt-2">
            <a href="" className="hover:text-green-500 text-xl">Tutorial Program</a>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      
    </Accordion>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
        </div>
        <div className="flex flex-row justify-center mt-24 ml-6 mr-6">
        <ShinyText text="Welcome to ITC Test Week India 2025" disabled={false} speed={3} className='text-5xl text-center font-bold' />
        </div>
    <div className="flex flex-col items-center mt-20" style={{fontFamily:'"Montserrat", arial'}}>
        <div className="text-green-700 text-4xl font-semibold">
            About Us
        </div>

        <div className="ml-16 mr-16 text-white text-center font-light mt-8 text-2xl">
        International Test Conference is the world's premier venue dedicated to the electronic test of devices, boards and systems-covering the complete cycle from design verification, design-for-test, design-for-manufacturing, silicon debug, manufacturing test, system test, diagnosis, reliability and failure analysis, and back to process and design improvement.
        </div>
        <div className="ml-16 mr-16 text-white text-center font-light mt-4 text-2xl">
        At ITC India, design, test, and yield professionals can confront challenges faced by the industry, and learn how these challenges are being addressed by the combined efforts of academia, design tool and equipment suppliers, designers, and test engineers.
        </div>
        </div>
        <div className="mt-24 ">
        <Carousel items={images2} autoScrollInterval={5000} />
    
        </div>
        <div className="flex flex-col mt-20 ">
          <div className="text-green-600 font-semibold text-4xl flex flex-row justify-center">Our Sponsors</div>
          <div className="mt-16">
          <div style={{height: '300px', width: '100%', position: 'relative'}}>
  <LogoWall
    items={logoImgs}
    direction='horizontal'
    pauseOnHover={true}
    size='clamp(8rem, 1rem + 20vmin, 25rem)'
    duration='60s'
    bgColor='#060606'
    bgAccentColor='#111111'
  />  
</div>
          </div>
        </div>
        <div style={{width:"100vw", height:"0.8px", backgroundColor:"white"}}></div>
        <Footer/>
        
        
        
    </>
}