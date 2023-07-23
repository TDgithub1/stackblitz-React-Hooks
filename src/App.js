import React from 'react';
import './style.css';
import React, { useCallback, useEffect, useState } from 'react';
//useCallback hook can indentify function differance/return function
//useMemo return value

//both use for app optimize

export default function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [result, setResult] = useState('');

  const myFunction = useCallback(
    () => () => {
      return 'amila';
    },
    []
  );

  console.log('rerender');
  console.log(result);

  useEffect(() => {
    console.log('useEffect');
    console.log(myFunction());
    setResult(myFunction());
  }, [myFunction]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter image Url"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input type="text" placeholder="Enter your city" />

      <input type="text" placeholder="Enter your position" />

      <button>Set Data</button>

      <p>{imageUrl}</p>
      <p>{name}</p>
      <p></p>

      <div></div>
    </div>
  );
}
