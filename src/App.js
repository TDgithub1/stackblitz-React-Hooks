import React from 'react';
import './style.css';
import { createContext, useState } from 'react';
import Com_f from './Components/Com_f';

//use for user data,such as password,email

export const userAuth = createContext({});

export default function App() {
  const [username, setUsername] = useState('');

  return (
    <userAuth.Provider
      value={{
        username,
        setUsername,
      }}
    >
      <h1>App {username}</h1>
      <Com_f />
    </userAuth.Provider>
  );
}
