import "./MovieListItem.css"
function MovieListItem({name,views,favourite}) {
  return (
   <li className={`list-group-item d-flex justify-content-between ${favourite ? "favourite":""}`}>
    <span className="list-group-item-label">{name}</span>
    <input type="number" defaultValue={views} />
    <div className="d-flex justify-content-center aling-items-center">
        <button className="btn-cookie btn-sm">
            <i className="fas fa-cookie"></i>
        </button>
        <button className="btn-cookie btn-sm">
            <i className="fas fa-trash"></i>
        </button>
            <i className="fas fa-star"></i>
    </div>
   </li>
  )
}

export default MovieListItem;