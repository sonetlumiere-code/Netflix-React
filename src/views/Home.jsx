import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Banner from '../Components/Banner/Banner';
import Carousel from '../Components/Carousel/Carousel';
import Separator from '../Components/Separator/Separator';
import { apiEntity } from '../services/apiConfig';

const Home = () => {

  const arr = [
    {name: "Chinese Astrology", "value": "Chinese Astrology"},
    {name:"Karmic Astrology", "value": "Karmic Astrology"},
    {name:"Horoscopes", "value":"Horoscopes"}
  ];

  return (
    <>
      <NavBar/>
      <Banner/>
      <Separator height={'60px'}/>
      <Carousel 
        entity={apiEntity.popularMovies} 
        title={'Películas populares'}
      />
      <Separator height={'40px'}/>
      <Carousel 
        entity={apiEntity.topRatedMovies} 
        title={'Películas mejor puntuadas'}
      />
      <Separator height={'40px'}/>
      <Carousel 
        entity={apiEntity.popularTv} 
        title={'Series populares'}
      />
      <Separator height={'40px'}/>
      <Carousel 
        entity={apiEntity.topRatedTv} 
        title={'Series mejor puntuadas'}
      />
    </>
  )
}

export default Home