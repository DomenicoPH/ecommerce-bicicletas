import { GiDutchBike } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { GiCrystalShine } from "react-icons/gi";

const Features = () => {
  return (
    <section className="py-20 bg-background dark:bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-black text-foreground dark:text-foreground mb-12">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-contrast dark:bg-background rounded-2xl shadow-2xl shadow-contrast/2 hover:shadow-contrast/6 cursor-pointer hover:scale-105 transition-all duration-500">
            <div className="text-4xl mb-4"><GiDutchBike className="mx-auto" size={50} /></div>
            <h3 className="text-xl font-bold mb-2 text-foreground dark:text-foreground">
              Hand-Restored
            </h3>
            <p className="text-text dark:text-foreground">
              Every bike is meticulously restored by our expert craftsmen.
            </p>
          </div>
          <div className="p-6 bg-contrast dark:bg-background rounded-2xl shadow-2xl shadow-contrast/2 hover:shadow-contrast/6 cursor-pointer hover:scale-105 transition-all duration-500">
            <div className="text-4xl mb-4"><BsTools className="mx-auto" size={35} /></div>
            <h3 className="text-xl font-bold mb-2 text-foreground dark:text-foreground">
              Authentic Parts
            </h3>
            <p className="text-text dark:text-foreground">
              We source genuine vintage components for lasting quality.
            </p>
          </div>
          <div className="p-6 bg-contrast dark:bg-background rounded-2xl shadow-2xl shadow-contrast/2 hover:shadow-contrast/6 cursor-pointer hover:scale-105 transition-all duration-500">
            <div className="text-4xl mb-4"><GiCrystalShine className="mx-auto" size={50} /></div>
            <h3 className="text-xl font-bold mb-2 text-foreground dark:text-foreground">
              Timeless Style
            </h3>
            <p className="text-text dark:text-foreground">
              Ride with the charm of the past and the reliability of today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
