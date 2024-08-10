
const Categories = ({categories,filterItems}) => {

  return (
    <div className="btn-container">
        {categories.map((category)=>{
            return <button 
            type="button" 
            className="btn" 
            key={category}
            onClick={()=>filterItems(category)}
            > 
                {category}
            </button> // We can use category as a key instead of id since category will only have unique values
        })}

    </div>
  )
}

export default Categories