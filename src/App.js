import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import {
  sonrakiFilm,
  addFavorite,
  oncekiFilm,
  ilkFilm,
} from "./actions/ilkAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const favMovies = useSelector((depo) => depo.favMovies);
  function sonrakiFilmFonk() {
    dispatch(sonrakiFilm());
  }

  function oncekiFilmFonk() {
    dispatch(oncekiFilm());
  }
  function ilkFilmFonk() {
    dispatch(ilkFilm());
  }
  function favFilmEkleFonk() {
    dispatch(addFavorite());
  }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600 "
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
          <Movie />

          <div className="flex gap-3 justify-end py-3">
            <button
              onClick={ilkFilmFonk}
              className="select-none px-4 py-2 border background text-white hover:border-blue-500 hover:text-blue-500"
            >
              Başa dön
            </button>

            <button
              onClick={oncekiFilmFonk}
              className="select-none px-4 py-2 border background text-white hover:border-blue-500 hover:text-blue-500"
            >
              Önceki
            </button>
            <button
              onClick={sonrakiFilmFonk}
              className="select-none px-4 py-2 border background text-white hover:border-blue-500 hover:text-blue-500"
            >
              Sıradaki
            </button>
            <button
              onClick={favFilmEkleFonk}
              className="select-none px-4 py-2 background hover:bg-blue-600 text-white"
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
