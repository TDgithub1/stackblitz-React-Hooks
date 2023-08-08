import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [reFetch, setReFetch] = useState(0);

  useEffect(() => {
    const controller = new AbortController(); // best way to stop data

    console.log('useEffect runing...', controller.signal);

    axios
      .get('https://jsonplaceholder.typicode.com/posts', {
        signal: controller.signal,
      })
      .then((result) => {
        console.log(result.data);
        console.log('get data');
        setData(result.data);
      })
      .catch((error) => {
        console.log(error.message);
      });

    return () => {
      console.log('useEffect cleanup....');
      controller.abort();
    };
  }, [reFetch]);

  return (
    <div>
      <button onClick={() => setReFetch((pre) => pre + 1)}>ReFetch</button>

      {data?.map((ele, index) => (
        <h3 key={index}>{ele.title}</h3>
      ))}
    </div>
  );
}

export default App;
