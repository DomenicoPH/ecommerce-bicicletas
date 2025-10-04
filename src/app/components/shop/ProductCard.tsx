"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

export type ProductCardProps = {
  title: string;
  desc: string;
  price: string;
  img: string;
  href?: string;
};

export default function ProductCard({ title, desc, price, img, href = "#" }: ProductCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg bg-background shadow-sm transition-shadow duration-300 hover:shadow-lg"
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Imagen */}
      <div className="relative">
        <Image 
            src={img}
            alt={title}
            width={400}
            height={300}
            className="h-64 w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
        <Link
          href={href}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white opacity-0 transition-all group-hover:opacity-100 group-hover:scale-105"
        >
          View Details
        </Link>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold text-stone-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{desc}</p>
        <p className="mt-4 text-lg font-bold text-primary">{price}</p>
      </div>
    </div>
  );
}