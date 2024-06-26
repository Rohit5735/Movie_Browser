import { useEffect, useState } from "react";
import Hero from "./Hero";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const MovieView = ()=>  {
  const {id} = useParams()
  console.log(id)
  const [movieDetails , setMovieDetails] = useState({})
  const [isLoadiing , setIsLoading] = useState(true)
  useEffect(() => {
    console.log("make an api request")
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9340887c91dce1e64d988aff81a574c0`)
    .then(response => response.json())
    .then(data =>{
        setTimeout(()=>{
          setMovieDetails(data)
          setIsLoading(false)
        },2000)
        
    })
  }, [id])

  function renderMovieDetails() {
    if(isLoadiing){
      return <Hero text="loading..."/>
    }
    if(movieDetails){
      const poster_path = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
      const backdropUrl =  `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
      return (
          <>
              <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
              <div className="container my-5">
                <div className="row">
                  <div className="col-md-3 gap-2">
                        <img src={poster_path} alt="..." className="image-fluid shadow rounded w-100 " />
                  </div>
                    <div className="col-md-9 p-3 ">
                        <h2>{movieDetails.original_title}</h2>
                        <p>{movieDetails.overview}</p>
                    </div>
                </div>
              </div>
          </>
      )
    }
  }
  return renderMovieDetails()
}

export default MovieView;
