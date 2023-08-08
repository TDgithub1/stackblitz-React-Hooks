import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

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
  }, []);

  return (
    <div>
      {data?.map((ele, index) => (
        <h3 key={index}>{ele.title}</h3>
      ))}
    </div>
  );
}

export default App;
