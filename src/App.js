import React from 'react';
import './style.css';
import React, { useRef, useState } from 'react';

export default function App() {
  const [myData, setMyData] = useState({
    image: '',
    name: '',
    city: '',
    position: '',
  });

  const imageUrlRef = useRef(); //this hook did not rerender
  const nameRef = useRef();
  const cityRef = useRef();
  const positionRef = useRef();

  const setDataHandle = () => {
    setMyData({
      image: imageUrlRef.current.value,
      name: nameRef.current.value,
      city: cityRef.current.value,
      position: positionRef.current.value,
    });

    imageUrlRef.current.focus(); // after click curser send to image text box
  };

  console.log('rerender');

  return (
    <div>
      <input type="text" placeholder="Enter image Url" ref={imageUrlRef} />

      <input type="text" placeholder="Enter your name" ref={nameRef} />

      <input type="text" placeholder="Enter your city" ref={cityRef} />

      <input type="text" placeholder="Enter your position" ref={positionRef} />

      <button onClick={setDataHandle}>Set Data</button>

      <p>{myData?.name}</p>
      <p>{myData?.image}</p>
      <p>{myData?.city}</p>
      <p>{myData?.position}</p>

      <div></div>
    </div>
  );
}
