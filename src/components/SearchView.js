import { Link } from "react-router-dom";
import Hero from "./Hero";

const MoiveCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailsUrl = `/movies/${movie.id}`;
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-2">
      <div className="card h-100">
        <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{movie.original_title}</h5>
          <p className="card-text">{movie.overview}</p>
          <Link to={detailsUrl} className="mt-auto btn btn-primary">Show details</Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, SearchResults }) => {
  const title = `You are searching for ${keyword}`;
  const resultsHTML = SearchResults.map((obj, i) => {
    return <MoiveCard movie={obj} key={i} />;
  });

  return (
    <>
      <Hero text={title} />
      {resultsHTML.length > 0 && (
        <div className="container">
          <div className="row">
            {resultsHTML}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchView;
