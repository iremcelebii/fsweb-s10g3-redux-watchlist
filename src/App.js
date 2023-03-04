import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { movies } from "./movies";
const initialState = { sira: 0, favMovies: [] };

function App() {
  const [state, setState] = useState(initialState);
  // const [sira, setSira] = useState(0);
  // const [favMovies, setFavMovies] = useState([]);

  function sonrakiFilm() {
    if (state.sira + 1 >= movies.length) {
      // setSira(sira - movies.length + 1);
      setState({ ...state, sira: 0 });
      // console.log("1.if " + sira);
    } else {
      setState({ ...state, sira: state.sira + 1 });
      // console.log("2. if  " + sira);
    }
  }
  // console.log("dışarısı " + sira);

  function favFilmEkle() {
    let favfilm = movies[state.sira];
    console.log(favfilm.id);

    for (let i = 0; i <= state.favMovies.length; i++) {
      if (state.favMovies.length === 0) {
        // setFavMovies([favfilm]);
        setState({ ...state, favMovies: [favfilm] });
      } else if (favfilm.id === state.favMovies[i].id) {
        // setFavMovies([...favMovies]);
        setState(state);
      } else {
        // setFavMovies([...favMovies, favfilm]);
        setState({ ...state, favMovies: [...state.favMovies, favfilm] });
      }
    }
  }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={state.sira} />

          <div className="flex gap-3 justify-end py-3">
            <button
              onClick={sonrakiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sıradaki
            </button>
            <button
              onClick={favFilmEkle}
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {state.favMovies.map((movie) => (
              <FavMovie
                state={state}
                setState={setState}
                key={movie.id}
                title={movie.title}
                id={movie.id}
              />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
