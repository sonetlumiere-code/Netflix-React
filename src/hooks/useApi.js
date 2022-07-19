import React, { useEffect, useState } from 'react'
import { apiBuilder } from '../services/apiConfig';

const useApi = (entity, lang = 'es', page = 1) => {
  
  const [values, setValues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    setIsLoading(true);
    setError(null);    
    const res = await apiBuilder.tryGet(entity, lang, page);
    if (res instanceof Error) {
      setError(res.message);
    } else {
      setValues(res);
    }
    setIsLoading(false);
    return res;
  }

  useEffect(() => {
    getData();
  }, []);

  return [values, isLoading, error]

}

export default useApi