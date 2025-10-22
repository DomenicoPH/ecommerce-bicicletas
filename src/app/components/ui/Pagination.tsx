"use client";

import Link from "next/link";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  return (
    <nav
      className="mt-8 flex items-center justify-center gap-2"
      aria-label="Pagination"
    >
      <Link
        href="#"
        className="inline-flex h-9 w-9 items-center justify-center rounded text-sm font-medium text-stone-500 hover:bg-primary/20 dark:text-stone-400 dark:hover:bg-primary/30"
      >
        <MdChevronLeft />
      </Link>

      {[...Array(totalPages)].map((_, i) => (
        <Link
          key={i}
          href="#"
          className={`inline-flex h-9 w-9 items-center justify-center rounded text-sm font-medium 
            ${
              currentPage === i + 1
                ? "bg-primary text-white font-semibold"
                : "text-stone-500 hover:bg-primary/20 dark:text-stone-400 dark:hover:bg-primary/30"
            }`}
        >
          {i + 1}
        </Link>
      ))}

      <Link
        href="#"
        className="inline-flex h-9 w-9 items-center justify-center rounded text-sm font-medium text-stone-500 hover:bg-primary/20 dark:text-stone-400 dark:hover:bg-primary/30"
      >
        <MdChevronRight />
      </Link>
    </nav>
  );
}