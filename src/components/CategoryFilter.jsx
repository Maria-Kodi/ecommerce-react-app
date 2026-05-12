const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

export default function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3 px-16 py-6">
      <button
        onClick={() => onSelect(null)}
        className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200
          ${!selected
            ? "bg-blue-700 text-white border-blue-700 shadow-md"
            : "bg-white text-gray-600 border-gray-300 hover:border-blue-500 hover:text-blue-600"
          }`}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-5 py-2 rounded-full text-sm font-semibold border-2 capitalize transition-all duration-200
            ${selected === cat
              ? "bg-blue-700 text-white border-blue-700 shadow-md"
              : "bg-white text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}