import React from 'react';
import './style.css';
// import React, { useState } from 'react';

import useMyInput from './Hooks/useMyInput'; //cutom hook

export default function App() {
  const [name, age, city, setName, setAge, setCity] = useMyInput(
    'Thisara',
    24,
    'Gampha'
  ); //cutom hook

  console.log(name, city, age);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="your name"
      />
      <br />
      <input
        type="text"
        onChange={(e) => setCity(e.target.value)}
        placeholder="your city"
      />
      <br />
      <input
        type="text"
        onChange={(e) => setAge(e.target.value)}
        placeholder="your age"
      />
      <br />
    </div>
  );
}

//same custom hook can reuse with different parameters(const[garde,subject,class]= useMyInput())
