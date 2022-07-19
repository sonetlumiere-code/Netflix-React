import React from 'react'
import Slider from 'react-slick';
import useApi from '../../hooks/useApi';
import Title from './Title/Title';
import Card from '../Card/Card';
import { settingsSlider } from './settings.js';


const Carousel = ({ entity, title }) => {
  const [values, loading, error] = useApi(entity);

  return (
    <>
      <Title text={title}/>
      <Slider { ...settingsSlider }>
        {
          loading ? (
            <div>Loading...</div>
          ) : (
            values.map((value) => (
              <Card 
                key={value.id}
                title={value.title || value.name}
                imgPath={value.backdrop_path}
              />
            ))
          )
        }    
      </Slider>
    </>
  )
  
}

export default Carousel
