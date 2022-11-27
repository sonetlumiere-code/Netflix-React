import React, { useState, useEffect } from 'react'
import { apiBuilder, apiQuality } from '../../services/apiConfig';
import styles from './Card.module.css';


const Card = ({ title, imgPath }) => {
  const [img, setImg] = useState(null);

  useEffect(() => {
    const url = apiBuilder.tryGetImg(imgPath, apiQuality.posterSmall);
    setImg(url);
  }, [])

  return (
    <div style={{backgroundImage: `url(${img})`}} className={styles.card}>
      <h1 className={styles.card_title}>{title}</h1>
    </div>
  )
}

export default Card