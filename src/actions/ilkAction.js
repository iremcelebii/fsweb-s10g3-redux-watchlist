export const SONRAKI_FILM = "SONRAKI_FILM";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const sonrakiFilm = () => {
  return { type: SONRAKI_FILM };
};

export const addFavorite = () => {
  return { type: ADD_FAVORITE };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};
