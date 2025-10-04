"use client";

import Link from "next/link";
import ProductCard from "./ProductCard";
import Pagination from "../ui/Pagination";

type Product = {
  title: string;
  desc: string;
  price: string;
  img: string;
};

const bikes: Product[] = [
  {
    title: "Classic Road Bike",
    desc: "Sleek and fast, perfect for long rides.",
    price: "$450.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxlfBrsE85y8dTrRwCcElO-JzKbMnnIRf5ucLQM91Var0mBeKhrsjElyHfosWb0frjwaPhDiDBEkiit3tDuBk35-qf2YnxrDLt5KovbY9vBKuqkkRD1JjPjmdrdclvqyJ3lVHF7YSPgxKBVcCLouSnQc_rfH9IoJzBxnVkhCOCHyaV2zN_hGw8a9arEFKbDFZ5RwoJI5vCc9iAcGlXefu34mcPZj0rqIhzmoH3l_H2iM3-0RkCOa-KLIYF9GbPYeFar7pMvfDikIOQ",
  },
  {
    title: "Vintage Cruiser",
    desc: "Comfortable and stylish for leisurely rides.",
    price: "$320.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcmD1pP5pzgKsvuVtG6ECnTvo96jBmVjznaGMs5jiOQ404CCA14fVxFdSAEW3zGnm25IMoEMVJFDVxA7qHzWFeDR8df0Syz2tt9w1VSPK1xF4OMgFhpXaN1uBZkaGDKnERhUw-Jg9S4B-fvBQwI8-MnRnGfUAvZfDPG28CX8QmPlE4vnarzGNE5R3xCuDutMCf8nbUoP4NMnjIvr_h_NWgXQ9UCuQqeLS-CWD0n5ozJGqxCshUFzSvfLwuxGxjh2Wk3221P5X18bH6",
  },
  {
    title: "Retro Mountain Bike",
    desc: "Durable and rugged for off-road adventures.",
    price: "$680.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBx5qqTlxQWLcZsWBXxNhMSTPsRkkuXGNngdJ6M_PBY15QyTjSRqT6LqwUf7SqI2E9d5hXDfnLJFZPGKe86C-5EvOviuYIiIqR8fB8i1ClwlDYtsplsf-kJL-0Wy5ZA2frN9FtKJpQN3R6t9COMmFWR2WqW0YBs25sm2NYW33Z4LbfXOhTwVdJ1UEwCOpAvHlHU-5q_xdVv9ORpAihn_NiOlyCp57OOYDOP89OPAbhijCgD52OH5LXJsF7kDaPgEZ1BwUQgJRo7Gf-i",
  },
];

export default function ShopGrid() {
  return (
    <div className="flex-1">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">
          Vintage Bicycles
        </h1>
        <div className="flex items-center gap-2">
          <label
            htmlFor="sort"
            className="text-sm font-medium text-stone-700 dark:text-stone-300"
          >
            Sort by:
          </label>
          <select
            id="sort"
            className="rounded border-stone-300 bg-background text-sm dark:border-stone-600 dark:text-white focus:border-primary focus:ring-primary"
          >
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {bikes.map((bike, idx) => (
          <ProductCard key={idx} {...bike} />
        ))}
      </div>
        <Pagination currentPage={1} totalPages={8} />
    </div>
  );
}
