import React, { useEffect, useState } from 'react'
import { apiBuilder } from '../services/apiConfig';

const useApiRandom = (entity, lang = 'es', page = 1) => {
  
  const [randomValue, setRandomValue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const getData = async () => {
    setIsLoading(true);
    setError(null);    
    const res = await apiBuilder.tryGet(entity, lang, page);
    if (res instanceof Error) {
      setError(res.message);
    } else {
      setRandomValue(res[Math.floor(Math.random() * res.length)]);
    }
    setIsLoading(false);
    return res;
  }

  useEffect(() => {
    getData();
  }, []);

  return [randomValue, isLoading, error]

}

export default useApiRandom