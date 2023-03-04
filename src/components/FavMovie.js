export default function FavMovie({ state, setState, title, id }) {
  function favFilmCikar(iddegeri) {
    const filtelenmismovie = state.favMovies.filter(
      (movie) => movie.id !== Number(iddegeri)
    );

    // setFavMovies(filtelenmismovie);
    setState({ ...state, favMovies: filtelenmismovie });
  }

  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1" id={id}>
        {title}
      </div>
      <button
        id={id}
        onClick={(event) => favFilmCikar(event.target.id)}
        className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100"
      >
        Çıkar
      </button>
    </div>
  );
}
