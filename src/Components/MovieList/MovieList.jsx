import MovieListItem from "../MovieListItem/MovieListItem"
import "./MovieList.css"
const MovieList = ({data}) => {
  console.log(data);
   return (
    <ul className="movie-list">
      {data.map(item=>(
        <MovieListItem name={item.name} views={item.views} favourite={item.favourite}/>
      ))}
    </ul>
  )
}

export default MovieList