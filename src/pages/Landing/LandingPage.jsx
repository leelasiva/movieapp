import React,{useState} from 'react'
import Header from "../../components/header/Header";
import img1 from '../../assests/imgCa';
import img2 from '../../assets/imgCb'
import img3 from '../../assets/imgCc'
import img4 from '../../assets/imgCd'
import './landingPage.css';
import ImageCarousel from '../../components/image-carousel/ImageCarousel';

const LandingPage = () => {
   

  return (
    <div>
    <Header showSearch={true}/>
    <ImageCarousel images={[img1,img2,img3,img4]}/>
    </div>
  )
}

export default LandingPage