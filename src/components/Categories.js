import '../styles/Categories.css'
function Categories({activeCategory,setActiveCategory,categories}){
    return(
        <div className="lmj-categories">
        <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="lmj-categories-select"
            >
                <option value=''>---</option>
                {
                    categories.map((cat) => (
                        <option
                        value={cat}
                        key={cat}
                        >{cat}</option>
                    ))
                }
            </select>
            <button onClick={() => setActiveCategory('')}>Renitialiser</button>
        </div>
        
    )
}

export default Categories