import { Button } from "./ui/ActionButton";

const bikes = [
  {
    name: "1950s Classic Cruiser",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYb_vxGhubRgzYOfFZtXOfoDeYUzjNS9lmch7IEFAgKOJpZB9AfiLomDdh8CxdgqyXFTQxidYacvK1KxSB0DvquKPdWZRGahz4IIjJIA_B_dKpONA5c-q4SLVAXAoZd59EJmB8zqotZGENUD0gh7OnREpjuF2GqxGy_PuEXWX5aCJDvJ06vmX7fzLnKPsIZ2vIDw7FIwapwNwV0XWuIIDdepue2tXyLbXJFB7_UB6RMNqgONhNFHdUx9yOOSPdrVWgbhh4nJuKHOsc",
  },
  {
    name: "1970s Road King",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrB_nDbWCTjjVCws8vRedi16VFG6ClVwrN60vyL31hBjDTdpEtNomR2gxs4UXebEMVuBOd1gu0RwTgoUSwRjvawxq9Zajt9Po57-m5jRVyROrxCtMnFZA-1gz4wQrxA_BefoIlu_095br2-FKCg2RZLOI3fkaPeQuI6BDsRVncVKjV7vSz06cT4Sl63U0w9cv4mZZqohLx5KwplnWMf53KgGBiW52xSnb4yUsyS5xHyBhl2t7NjUnRrp4h9ToPEHncgUeVK9kZPQta",
  },
  {
    name: "1980s Mountain Explorer",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuArnuPk7W01wyL9gIWeusEcrkQ-7o8s89gzSyfuUQp-XxiPYvZbyfRMHruFAdQwtrlcJwIPB1dhtuHaYEW_Uj026KP24OeblkOT0jPNAtG48_CW8TBFBTFTk_1eSQ_RUmuHwhdJ0_t1Cy3Vrw6NVbhvfmJH6U-Wcsb5i_PnZb3dIc9maptV_URyHxrRTFbaNeErzDVFucbxP7dE8N3ea5uDoQ9iJmbqnSEgDx7DZeKts-I5JGt_T8BuwAWVMVe1OPuZsURw3O48NDcg",
  },
  {
    name: "1960s Racer",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4_IIU1v4aZEuvwAWjPFoShuCrL7aJEnd_o7vF-s8_PJVdBCOqEb1jDQZzl-ZjrSbKS7168MtHoST2lYCn3JB1ah4dhQTQw6QF5GkHJwj_t_xTN3Kq3xQwZ195s3Mp9x-LLo0f6kLVr6N_P-GMT2chpGOglUHktUL48DdigPCYkZS4Du0cvwuKpUpDtW-tJo-xxJi6bQ9Fk3txzpm5PQzOCQiHSImGSHELCVJBuLRhrGO8roq701pCcPWH5ZN1ttkuDdcEMJIrP8ul",
  },
];

const BikesGrid = () => {
  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-black text-foreground mb-12 text-center">
          Featured Bicycles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bikes.map((bike, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={bike.img}
                alt={bike.name}
                className="w-full h-75 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-foreground text-lg font-bold">
                  {bike.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center items-center py-10">
          <Button href="/shop" variant="primary">
            Shop Now
          </Button>
        </div>
      
      </div>
    </section>
  );
};

export default BikesGrid;
