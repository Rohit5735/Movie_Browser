import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Hero from "./Hero";

    const MoiveCard = ({movie}) => {
        const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        const detailsUrl = `/movies/${movie.id}`
        return(
        <div className="col-lg-3 col-md-3 col-2 my-2 rounded-2  ">
            <div className="card">
                <img src={posterUrl} className="card-img-top" alt={movie.original_title}/>
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <p className="card-text">{movie.overview}</p>
                    <Link to={detailsUrl} className="btn btn-primary">Show details</Link>
                </div>
            </div>
        </div>
        )
    }
        const SearchView = ({keyword, SearchResults})=>
        {
            const title = `you are searching for ${keyword}`;
            const resultsHTML = SearchResults.map((obj,i) => {
                return <MoiveCard movie={obj} key={i} />
            })
                return(
                    <>
            
                        <Hero text={title}/>
                        {resultsHTML &&
                            <div className="container">
                                <div className="row">
                                    {resultsHTML}
                                </div>
                            </div>
                        }
            
                        
                    </>
                )
            
        }

export default SearchView;