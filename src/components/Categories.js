import { useSelector,useDispatch } from "react-redux";
import { toggleCategory,clearCategory } from "../features/CategorySlice";
function Categories({categories}) {
  const dispatch = useDispatch();
  const activeCategories = useSelector((state) => state.category.activeCategories)
    return (
      <div className="lmj-categories">
        <ul>
          {categories.map((cat) => (
            <li key={cat}>
              <label>
                <input
                  type="checkbox"
                  checked={activeCategories.includes(cat)}
                  onChange={() => dispatch(toggleCategory(cat))}
                />
                {cat}
              </label>
            </li>
          ))}
        </ul>
        <button onClick={() => dispatch(clearCategory())}>
          Réinitialiser
        </button>
      </div>
    );
  }

  export default Categories;