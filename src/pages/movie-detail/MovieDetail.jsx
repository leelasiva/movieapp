import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './moviedetail.css';
import { getMovieDetails } from '../../api/movies';
import { useParams, Link } from 'react-router-dom';


const MovieDetail = () => {

  const params = useParams();
  const [movieDetail, setMovieDetail] = useState({});

  const { movieId } = params;

  useEffect(() => {
    fetchMovieDetail(movieId);
  }, [])

  const fetchMovieDetail = (movieId) => {
    getMovieDetails(movieId).then(res => {
      const { data, status } = res;
      if (status === 200) {
        console.log(data);
        setMovieDetail(data);
      }
    }).catch(err => {
      console.log(err.message)
    });
  };

  //give default empty strings values if they are undefined 

  const {
    name = "",
    casts = [],
    posterUrl = "",
    language = "",
    director = "",
    releaseDate = "",
    description = "",
    _id = "",
    releaseStatus = "",
    trailerUrl = "",
  } = movieDetail;

  const buttonText =
    releaseStatus === "RELEASED" ? "BOOK TICKETS" : "COMING SOON";

  const buttonUrl =
    releaseStatus === "RELEASED" ? `/buy-tickets/${name}/${_id}` : "#";



  return (
    <div className='movie-detail'>
      <Header />
      <div className='video-player d-flex justify-content-center '>
        <ReactPlayer
          url={trailerUrl}
          controls
          className='videop p-2 bg-light'
          width="70%"
          height="450px"
          background="white" />
      </div>
      <div className='wrapperMD m-5 '>
        <div className='movie-data'>
          <div className='row'>
            <div className='col-3 bg-dark p-4'>
              <img
                src={posterUrl}
                alt="posterUrl"
                className='movie-poster'
                /> 
            </div> 
            <div className='col-9 p-4'>
              <h2>{name}</h2>
              <h4>{description}</h4>
              <hr className='px-4'/>
              <h5>Directed by:  {director}</h5>
              <h5>Release Date : {releaseDate}</h5>
              <hr />

              <h4>Casts</h4>
              {
                casts.map((cast) => {
                  return <h5 key={cast}>{cast}</h5>
                })
              }
              <hr />

              <Link className='btn btn-warning' to={buttonUrl}>
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
        </div>
        <div>
        <Footer />
        </div>
      
    </div>
  )
}

export default MovieDetail;