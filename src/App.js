import React from 'react';
import './style.css';
import React, { useLayoutEffect, useState } from 'react';

const url = 'https://jsonplaceholder.typicode.com/';

export default function App() {
  const [data, setData] = useState({});
  const [isClick, setIsClick] = useState(1);

  useLayoutEffect(() => {
    console.log('useEffect runing...');

    setTimeout(() => {
      fetch(`${url + 'posts'}/${isClick}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, 1000);
  }, [isClick]);

  console.log(data); //useState data

  return (
    <div>
      <h1>How many times button click is: {isClick}</h1>

      <h3>{data?.title}</h3>

      <button onClick={() => setIsClick((pre) => pre + 1)}>Get Data</button>
    </div>
  );
}

// the useLayoutEffect actually runs before the useEffect runs. This is because useLayoutEffect is fired synchronously after DOM is mutated and before the browser paints the new changes.

// The useLayoutEffect hook is similar to the useEffect theme in that it fires synchronously once all DOM loading is completed, rather than asynchronous like the useEffect hook. This can be used to re-render the DOM and read its layout concurrently.
