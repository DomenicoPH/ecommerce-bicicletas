const testimonials = [
    {
      id: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa6AqRJ6SWt23WR5QRfkbRg1-eooZi1xsYEzqlYGZZEHC5riL1c2w-B6JT3cV66TI93w6iGIyatyT9rxUW_z4Y3EGKM1VpJ8roYgAI313pudqpBiioHb5-bo512o7Z0eLfBvrxgkQ_Zjl420f2OWbkiVSwnoQBd61IlHeyd5cDh3UyaJkK7y9e5C3gNYHHs77QLA9H3V94mQTVYRO2M94n-4SoWgDUjzssQ-VIM4pCdsyRGUQw1xK8YMNp6wQh6J5NxsaL5h5M7hV7",
      name: "Sophia Carter",
      date: "2 months ago",
      message: "“I purchased a restored 1960s road bike from Vintage Wheels, and it's absolutely stunning! The craftsmanship is impeccable, and the bike rides like a dream.”"
    },
    {
      id: 2,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlZ_VFffxJdFnCJ6yS9ZFjOBz6vUB_Jc1-Cfl0uyaZX9Wko7eeSKznJnIi-XC3FrkOTKaxxWaoJaeP9cHB3eqYJ-sEQU4Ye8q5iHvMIK_r9-EB0HJm3E04KhuQQZePIc8oC5Xsn5rd2XifrL8cze1BiNe0BcCp-fgLHUyG8rF91jVZ8xxTSzKCrf-1hjrmDTxxLWM_w_hBOHs9WGo7CJMpM3noYk57xoujBKAdcw2BpFzDRlkSH7gZpcUVAqrMDd0uvv01bt0F7S6D",
      name: "Ethan Bennett",
      date: "3 months ago",
      message: "“The repair service at Vintage Wheels is top-notch. They restored my vintage cruiser to its original glory, and it now rides better than ever.”"
    },
    {
      id: 3,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAljQggyBxZLCNvqDoOc9wSH7jX1ImnLrAVGvRTI34N_ZpGsARbOoNu_WI8ZTVw5CcvrUHDDRXJWgo3rR7yrhLHnfljtjB6K2QBG1Cc8_Ip4SP58XZ_qPzWtAvVy6IpAuhxnK66dznfM2sRCv5dh4IjgBwJgAyrXJ9cWjWyP0GhvTDC-SmHsqHlCSqHmqyuReB26o-pjKUoMd-Uiwj9aR3Af88FW_KxMwwvpXGRKkqhCB4RmTxcqSQ9FFIq46ZdABXXE5NMrYEiHAlk",
      name: "Olivia Hayes",
      date: "4 months ago",
      message: "“I love the vintage aesthetic of the bikes at Vintage Wheels. It needed a few adjustments, but the team was responsive and helped resolve the issues quickly.”"
    }
];

const Testimonials = () => {

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-black text-center text-foreground mb-12">
          What Our Riders Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="flex flex-col gap-4 bg-background p-6 rounded-xl shadow">
              <div className="flex items-center gap-4">
                <img alt="Sophia Carter" className="h-12 w-12 rounded-full object-cover" src={testimonial.image}/>
                <div>
                  <p className="font-semibold text-stone-900 dark:text-stone-100">{testimonial.name}</p>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{testimonial.date}</p>
                </div>
              </div>
              <p className="text-text mb-4">
                {testimonial.message}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
