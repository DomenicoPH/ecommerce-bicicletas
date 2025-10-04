"use client";

import Link from "next/link";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

export default function ShopPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background">
      {/* Main */}
      <main className="container mx-auto flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar */}
          <aside className="w-full lg:w-64">
            <div className="sticky top-24">
              <h3 className="mb-4 text-lg font-semibold text-stone-900 dark:text-white">
                Filters
              </h3>
              <div className="space-y-6">
                {/* Type */}
                <div>
                  <label
                    htmlFor="type-filter"
                    className="block text-sm font-medium text-stone-700 dark:text-stone-300"
                  >
                    Type
                  </label>
                  <select
                    id="type-filter"
                    className="mt-1 block w-full rounded border-stone-300 bg-background dark:border-stone-600 dark:text-white focus:border-primary focus:ring-primary"
                  >
                    <option>All</option>
                    <option>Road Bike</option>
                    <option>Cruiser</option>
                    <option>Mountain Bike</option>
                    <option>Commuter</option>
                  </select>
                </div>
                {/* Price */}
                <div>
                  <label
                    htmlFor="price-filter"
                    className="block text-sm font-medium text-stone-700 dark:text-stone-300"
                  >
                    Price
                  </label>
                  <input
                    type="range"
                    id="price-filter"
                    className="mt-1 block h-2 w-full cursor-pointer appearance-none rounded-lg bg-stone-200 accent-primary dark:bg-stone-700"
                  />
                  <div className="mt-2 flex justify-between text-xs text-stone-500 dark:text-stone-400">
                    <span>$50</span>
                    <span>$1000+</span>
                  </div>
                </div>
                {/* Condition */}
                <div>
                  <h4 className="text-sm font-medium text-stone-700 dark:text-stone-300">
                    Condition
                  </h4>
                  <div className="mt-2 space-y-2">
                    {["Mint", "Excellent", "Good"].map((cond) => (
                      <div className="flex items-center" key={cond}>
                        <input
                          type="checkbox"
                          id={`condition-${cond.toLowerCase()}`}
                          name="condition"
                          className="h-4 w-4 rounded border-stone-300 text-primary focus:ring-primary"
                        />
                        <label
                          htmlFor={`condition-${cond.toLowerCase()}`}
                          className="ml-2 text-sm text-stone-600 dark:text-stone-400"
                        >
                          {cond}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Products */}
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
              {[
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
              ].map((bike, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col overflow-hidden rounded-lg bg-background shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="relative">
                    <div
                      className="aspect-h-3 aspect-w-4 w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${bike.img})` }}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
                    <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white opacity-0 transition-all group-hover:opacity-100 group-hover:scale-105">
                      View Details
                    </button>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="text-base font-semibold text-stone-900 dark:text-white">
                      {bike.title}
                    </h3>
                    <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                      {bike.desc}
                    </p>
                    <p className="mt-4 text-lg font-bold text-primary">
                      {bike.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <nav
              className="mt-8 flex items-center justify-center gap-2"
              aria-label="Pagination"
            >
              <Link
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded text-sm font-medium text-stone-500 hover:bg-primary/20 dark:text-stone-400 dark:hover:bg-primary/30"
              >
                <span className="material-symbols-outlined text-base">
                  <MdChevronLeft />
                </span>
              </Link>
              <Link
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded bg-primary text-sm font-semibold text-white"
              >
                1
              </Link>
              <Link
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded text-sm font-medium text-stone-500 hover:bg-primary/20 dark:text-stone-400 dark:hover:bg-primary/30"
              >
                2
              </Link>
              <Link
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded text-sm font-medium text-stone-500 hover:bg-primary/20 dark:text-stone-400 dark:hover:bg-primary/30"
              >
                3
              </Link>
              <span className="inline-flex h-9 w-9 items-center justify-center text-sm font-medium text-stone-500 dark:text-stone-400">
                ...
              </span>
              <Link
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded text-sm font-medium text-stone-500 hover:bg-primary/20 dark:text-stone-400 dark:hover:bg-primary/30"
              >
                8
              </Link>
              <Link
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded text-sm font-medium text-stone-500 hover:bg-primary/20 dark:text-stone-400 dark:hover:bg-primary/30"
              >
                <span className="material-symbols-outlined text-base">
                  <MdChevronRight />
                </span>
              </Link>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}
