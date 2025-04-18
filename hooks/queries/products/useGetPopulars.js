'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetPopulars = () => {
  const fetchPopulars = async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    return result.data.slice(0, 6); 
  };

  return useQuery({
    queryKey: ['popularsList'],  
    queryFn: fetchPopulars, 
    refetchOnWindowFocus: false, 
  });
};

export default useGetPopulars;
