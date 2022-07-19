import React from 'react';
import styles from './Banner.module.css';
import useApiRandom from '../../hooks/useApiRandom';
import { apiBuilder, apiEntity, apiQuality } from '../../services/apiConfig';

const Banner = () => {
  const [randomMovie, loading, error] = useApiRandom(apiEntity.popularMovies);
  console.log(randomMovie);
  return (
    <>
      <section style={
        loading
          ?  { backgroundImage: 'none'}
          :  { backgroundImage: `url(${apiBuilder.tryGetImg(randomMovie.backdrop_path, apiQuality.backdropLarge)})`}
        }
      >
        <div className={styles.content}>
          <h2>{loading ? "Loading..." : randomMovie?.title}</h2>
          <p>{loading ? "Loading..." : randomMovie?.overview}</p>
          <button className={styles.btn}>Reproducir</button>
          <button className={styles.btn}>Mas información</button>
        </div>
    </section>
    </>
  )
}

export default Banner