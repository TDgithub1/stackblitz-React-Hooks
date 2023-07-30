import { useState, useEffect } from 'react';

const useMyFetchData = (Location = 'posts') => {
  const url = 'https://jsonplaceholder.typicode.com/';

  const [data, setData] = useState([]);

  const getData = async (getLocation = Location) => {
    try {
      const res = await fetch(`${url + getLocation}`);
      const data = await res.json(); //array data convert to normal data

      if (data) {
        console.log('get data from db');
        setData(data);
      } else {
        console.log('can not get data from db');
        setData([]);
      }
    } catch (err) {
      console.log('can not get data from db');
      setData([]);
    }
  };

  useEffect(() => {
    getData();

    return () => {
      getData();
    };
  }, [Location]);

  //direct return custom hook

  return [data, getData];
};

export default useMyFetchData;

// react router dom install for when url change get value option