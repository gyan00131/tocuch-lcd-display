"use client";

import { useState } from "react";
import { categories } from "@/lib/blog-data";

interface CategoryFilterProps {
  onFilter: (category: string) => void;
  active: string;
}

export default function CategoryFilter({ onFilter, active }: CategoryFilterProps) {
  return (
    <div className="category-pills" role="tablist" aria-label="Blog categories">
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          onClick={() => onFilter(cat)}
          className={`category-pill ${active === cat ? "active" : ""}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
