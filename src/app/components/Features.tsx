/*
import { GiDutchBike, GiCrystalShine } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { ReactNode } from "react";

interface Feature {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
}

const features:Feature[] = [
  {
    id: 1,
    icon: <GiDutchBike className="mx-auto" size={50} />,
    title: 'Hand-Restored',
    description: 'Every bike is meticulously restored by our expert craftsmen.'
  },
  {
    id: 2,
    icon: <BsTools className="mx-auto" size={35} />,
    title: 'Authentic Parts',
    description: 'We source genuine vintage components for lasting quality.'
  },
  {
    id: 3,
    icon: <GiCrystalShine className="mx-auto" size={50} />,
    title: 'Timeless Style',
    description: 'Ride with the charm of the past and the reliability of today.'
  }
];

const FeatureCard = ({icon, title, description}: Feature) => {
    return (
      <div className="p-6 bg-contrast dark:bg-background rounded-2xl shadow-2xl shadow-contrast/2 hover:shadow-contrast/6 cursor-pointer hover:scale-105 transition-all duration-500">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-foreground dark:text-foreground">{title}</h3>
        <p className="text-text dark:text-foreground">{description}</p>
      </div>
    )
}

const Features = () => {
  return (
    <section className="py-20 bg-background dark:bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-black text-foreground dark:text-foreground mb-12">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
*/

import { GiDutchBike, GiCrystalShine } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { ReactNode } from "react";
import { FeatureCard } from "./FeatureCard";

interface Feature {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
}

const features:Feature[] = [
  {
    id: 1,
    icon: <GiDutchBike className="mx-auto" size={50} />,
    title: 'Hand-Restored',
    description: 'Every bike is meticulously restored by our expert craftsmen.'
  },
  {
    id: 2,
    icon: <BsTools className="mx-auto" size={35} />,
    title: 'Authentic Parts',
    description: 'We source genuine vintage components for lasting quality.'
  },
  {
    id: 3,
    icon: <GiCrystalShine className="mx-auto" size={50} />,
    title: 'Timeless Style',
    description: 'Ride with the charm of the past and the reliability of today.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-background dark:bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-black text-foreground dark:text-foreground mb-12">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard 
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
