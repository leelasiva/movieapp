import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MoviesList from '../../components/movies-List/MoviesList'
import TheatresList from '../../components/theatres/TheatresList'
import './client.css'


const Client = () => {

   const  name = localStorage.getItem("name");

  return (
    <div>
  <div className='over-layer'></div>
    <div>
     <Header/>
     </div>
     <div className='client-main min-vh-100 vw-100'>
        <h2>Welcome! {name}</h2>
        <h4>Please have a look at the data below</h4>
        <TheatresList/>
        <MoviesList/>

     <Footer/>
     </div>
    </div>
  )
}

export default Client