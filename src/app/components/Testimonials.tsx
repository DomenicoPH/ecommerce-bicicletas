const Testimonials = () => {
  return (
    <section className="py-20 bg-background dark:bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-black text-center text-foreground dark:text-foreground mb-12">
          What Our Riders Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-contrast dark:bg-contrast p-6 rounded-xl shadow">
            <p className="text-text dark:text-text mb-4">
              “The 1970s Roadster I bought is a dream. Looks vintage, rides like new!”
            </p>
            <span className="font-bold text-foreground dark:text-foreground">— Alex M.</span>
          </div>
          <div className="bg-contrast dark:bg-contrast p-6 rounded-xl shadow">
            <p className="text-text dark:text-text mb-4">
              “Restoration quality is unmatched. Truly feels like stepping back in time.”
            </p>
            <span className="font-bold text-foreground dark:text-foreground">— Sarah L.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
