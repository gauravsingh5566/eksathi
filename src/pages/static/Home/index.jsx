import React from "react";
import CallToAction from "./components/CallToAction";
import CallToAction2 from "./components/CallToAction2";
import CallToAction3 from "./components/CallToAction3";
import CallToAction4 from "./components/CallToAction4";
import CallToAction5 from "./components/CallToAction5";
import Clients from "./components/Clients";
import Funfact from "./components/Funfact";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Info2 from "./components/Info2";
import Testimonial from "./components/Testimonial";
import AboutSection from "./components/AboutSection";
import { Button } from "@mui/material";
import ExpertSection from "./components/ExpertSection";
import RecentQuestionsSection from "./components/RecentQuestionsSection";
import './Home.css';
import CategoriesSection from "./components/CategoriesSection";
import JobsSection from "./components/JobsSection";
import { useEffect } from "react";
import FeaturedQuestions from "./components/FeaturedQuestions";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <div>
      <Hero />
      <ExpertSection/>
      {/* <RecentQuestionsSection/> */}
      <FeaturedQuestions/>
      <CategoriesSection/>
      <JobsSection/>
      <CallToAction2 />
      {/* <Info /> */}
      {/* <Info2 /> */}
      {/* <Testimonial /> */}
      {/* <CallToAction3 /> */}
      <CallToAction4 />
      <Clients />
      <CallToAction5 />
    </div>
  );
};

export default Home;
