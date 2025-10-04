"use client";

import FiltersSidebar from "../components/shop/FiltersSidebar";
import ShopGrid from "../components/shop/ShopGrid";

export default function ShopPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background">
      <main className="container mx-auto flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
            <FiltersSidebar />
            <ShopGrid />
        </div>
      </main>
    </div>
  );
}
