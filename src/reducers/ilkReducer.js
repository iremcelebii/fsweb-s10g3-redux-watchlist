import { movies } from "../movies";
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SONRAKI_FILM,
  ONCEKI_FILM,
  ILK_FILM,
} from "../actions/ilkAction";

const initialState = { sira: 0, favMovies: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SONRAKI_FILM:
      if (state.sira + 1 >= movies.length) {
        return { ...state, sira: 0 };
      } else {
        return { ...state, sira: state.sira + 1 };
      }
    case ONCEKI_FILM:
      if (state.sira === 0) {
        return { ...state, sira: 19 };
      } else {
        // console.log("2.if " + state.sira);
        return { ...state, sira: state.sira - 1 };
      }

    case ILK_FILM:
      return { ...state, sira: 0 };

    case ADD_FAVORITE:
      let favfilm = movies[state.sira];
      console.log(favfilm.id);

      for (let i = 0; i <= state.favMovies.length; i++) {
        if (state.favMovies.length === 0) {
          return { ...state, favMovies: [favfilm] };
        } else if (favfilm.id === state.favMovies[i].id) {
          return state;
        } else {
          return { ...state, favMovies: [...state.favMovies, favfilm] };
        }
      }

    case REMOVE_FAVORITE:
      const filtelenmismovie = state.favMovies.filter(
        (movie) => movie.id !== Number(action.payload)
      );

      return { ...state, favMovies: filtelenmismovie };

    default:
      return state;
  }
};

export default reducer;
