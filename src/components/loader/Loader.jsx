import React from 'react'
import loader from '../../assets/movie-loading.gif'
import './loader.css'

const Loader = () => {
  return (
    
     <img src={loader} alt='loading...' className='loader'/>
    
  )
}

export default Loader