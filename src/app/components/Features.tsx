const Features = () => {
  return (
    <section className="py-20 bg-background dark:bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-black text-foreground dark:text-foreground mb-12">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-contrast dark:bg-contrast rounded-2xl shadow-sm">
            <div className="text-4xl mb-4">🚲</div>
            <h3 className="text-xl font-bold mb-2 text-foreground dark:text-foreground">
              Hand-Restored
            </h3>
            <p className="text-text dark:text-foreground">
              Every bike is meticulously restored by our expert craftsmen.
            </p>
          </div>
          <div className="p-6 bg-contrast dark:bg-contrast rounded-2xl shadow-sm">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-xl font-bold mb-2 text-foreground dark:text-foreground">
              Authentic Parts
            </h3>
            <p className="text-text dark:text-foreground">
              We source genuine vintage components for lasting quality.
            </p>
          </div>
          <div className="p-6 bg-contrast dark:bg-contrast rounded-2xl shadow-sm">
            <div className="text-4xl mb-4">✨</div>
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
