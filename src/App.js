import './App.css';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PopUp from './Components/PopUp';

function App() {
  const [data, setData] = useState([]);
  const [reFetch, setReFetch] = useState(0);

  const popUp = useRef();

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

        popUp.current.showPopUp(); // from popup.js

        setData(result.data);

        setTimeout(() => popUp.current.hidePopUp(), 4000);
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
      <PopUp ref={popUp} />

      <button onClick={() => setReFetch((pre) => pre + 1)}>ReFetch</button>

      {data?.map((ele, index) => (
        <h3 key={index}>{ele.title}</h3>
      ))}
    </div>
  );
}

export default App;
