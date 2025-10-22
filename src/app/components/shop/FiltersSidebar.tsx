"use client";

export default function FiltersSidebar() {
  return (
    <aside className="w-full lg:w-64">
      <div className="sticky top-24">
        <h3 className="mb-4 text-lg font-semibold text-stone-900 dark:text-white">
          Filters
        </h3>
        <div className="space-y-6">
          {/* Tipo */}
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

          {/* Precio */}
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

          {/* Condición */}
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
  );
}
