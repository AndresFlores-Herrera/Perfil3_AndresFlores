import { useState, useEffect } from 'react';

export default function useFetchCharacters() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const result = await response.json();
        
        // Retraso artificial de 2 segundos para que se vea el Loading en el video
        setTimeout(() => {
          setData(result.results);
          setLoading(false);
        }, 2000);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
