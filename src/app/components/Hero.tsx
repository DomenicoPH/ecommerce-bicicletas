'use client'

import { useTheme } from "next-themes";
import { Button } from "./ui/ActionButton";

const Hero = () => {

  const {theme} = useTheme()
  const colorFix = theme === 'dark' ? 'text-foreground' : 'text-contrast';

  return (
    <section
      className="relative bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 py-32 overflow-hidden"
      style={{
        backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuD4_IIU1v4aZEuvwAWjPFoShuCrL7aJEnd_o7vF-s8_PJVdBCOqEb1jDQZzl-ZjrSbKS7168MtHoST2lYCn3JB1ah4dhQTQw6QF5GkHJwj_t_xTN3Kq3xQwZ195s3Mp9x-LLo0f6kLVr6N_P-GMT2chpGOglUHktUL48DdigPCYkZS4Du0cvwuKpUpDtW-tJo-xxJi6bQ9Fk3txzpm5PQzOCQiHSImGSHELCVJBuLRhrGO8roq701pCcPWH5ZN1ttkuDdcEMJIrP8ul)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className={`text-5xl font-black tracking-tight mb-6 ${colorFix}`}>
          Rediscover the Ride
        </h1>
        <p className={`max-w-2xl mx-auto text-lg mb-8 ${colorFix}`}>
          Experience timeless design and modern reliability with our curated collection of vintage bicycles.
        </p>
         <Button href="#shop" variant="primary">
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;
