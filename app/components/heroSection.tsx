import ArrowRight from "@/public/images/arrowRight";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative text-center py-30 overflow-hidden">
       <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">

        <div className="lg:text-left text-center text-text-black gap-6 lg:w-[50%]">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Email <br className="hidden md:block"/> Setup,
            <span className="text-primary"> Done For You</span>
          </h2>
          <p className="text-lg text-text-black mb-8 xl:max-w-[70%]">
            Kiskas is a done-for-you service for custom domain emails. We handle
            all the setup so you don't have to.
          </p>
          <div className="flex justify-center items-center lg:justify-start">
          <a
            href="#contact"
            className="border flex items-center gap-3 border-primary py-4 px-10 rounded-lg bg-primary text-white"
          >
            Try Kiskas free <ArrowRight color="#fff" />
          </a>
          </div>
        </div>
        <div className="xl:w-[50%]">
          <img src={'/heroImage.png'} alt="hero image" className="w-full" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
