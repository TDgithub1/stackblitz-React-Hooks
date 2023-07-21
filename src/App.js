import React from 'react';
import './style.css';
import React, { useMemo,useState } from 'react';
//useMemo hook use to speed up app

const inputHandle= (inputValue) =>{

  let data

  for(let i=0;i<100000;i++){
    data = i
  }

  return inputValue

}

export default function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
 
  const imageData = useMemo(()=> inputHandle(setImageUrl),[imageUrl]);
 
 
  console.log('rerender');

 
  return (
    <div>
      <input type="text" placeholder="Enter image Url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

      <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>

      <input type="text" placeholder="Enter your city" />

      <input type="text" placeholder="Enter your position" />

      <button onClick={}>Set Data</button>

      <p>{imageUrl}</p>
      <p>{name}</p>
      <p>{imageData}</p>
      

      <div></div>
    </div>
  );
}
