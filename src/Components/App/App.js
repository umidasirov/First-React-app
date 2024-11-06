import AppFilter from "../AppFilter/AppFilter";
import AppInfo from "../AppInfo/AppInfo";
import MovieList from "../MovieList/MovieList";
import MoviesAddForm from "../MoviesAddForm/MoviesAddForm";
import SearchPanell from "../SearchPanell/SearchPanell";
import "./App.css"
function App() {
  const data=[{
    id:1,
    name:"Harry Potter",
    views:12,
    favourite:false
  },
  {
      id:2,
      name:"Lokki",
      views:124,
      favourite:true
  },
  {
    id:3,
      name:"Daho",
      views:999,
      favourite:true
  }]
  return (
    <div className="App font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-pannel">
          <SearchPanell />
          <AppFilter />
        </div>
        <MovieList data={data}/>
        <MoviesAddForm/>
      </div>
    </div>
  );
}

export default App;
