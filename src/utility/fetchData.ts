import { useState, useEffect } from 'react';
import axios from 'axios';

export interface defaultOptions {
  method: string;
  headers?: {};
  body?: {};
}

 const defaultOptions : defaultOptions = {
    method: 'GET',
  };

const fetchData= (_url: string, options = {...defaultOptions}) => {

  const [data, setData] = useState([]);
  const [isLoaing, setIsLoaing] = useState(true);
  const [error, setError] = useState("");



  useEffect(() => {

    const fetchData = async () => {
        setIsLoaing(true);
      try{
        const response = await axios(_url, options);
        setData(response.data);
        setIsLoaing(false);
      } catch (err: any) {
        setError(err);
        setIsLoaing(false);
      }
    };


    fetchData();
  }, [_url]);


  return { data, isLoaing, error };
}

export default fetchData;
