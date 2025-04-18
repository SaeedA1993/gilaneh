'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetTeaList = () => {
  const fetchTeaProducts = async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?category_id=1`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    return result.data; 
  };

  return useQuery({
    queryKey: ['teaList'],  
    queryFn: fetchTeaProducts, 
    refetchOnWindowFocus: false, 
  });
};

export default useGetTeaList;
