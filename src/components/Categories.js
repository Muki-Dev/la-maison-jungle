function Categories({ activeCategory, categories, onToggle }) {
    return (
      <div className="lmj-categories">
        <ul>
          {categories.map((cat) => (
            <li key={cat}>
              <label>
                <input
                  type="checkbox"
                  checked={activeCategory.includes(cat)}
                  onChange={() => onToggle(cat)}
                />
                {cat}
              </label>
            </li>
          ))}
        </ul>
        <button onClick={() => activeCategory.splice(0, activeCategory.length)}>
          Réinitialiser
        </button>
      </div>
    );
  }

  export default Categories;