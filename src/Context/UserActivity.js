import React, { createContext, useReducer, useState } from 'react';

import { userActivityReducer } from '../Reducers/userActivityReducer';

export const userActivity = createContext({});

const UserActivity = ({ children }) => {
  // const [image, setImage] = useState('');
  // const [name, setName] = useState('');
  // const [city, setCity] = useState('');
  // const [position, setPosition] = useState('');

  const [state, setState] = useReducer(userActivityReducer, {
    image: '',
    name: '',
    city: '',
    position: '',
  });

  return (
    <userActivity.Provider
      value={{
        // image,
        // setImage,
        // name,
        // setName,
        // city,
        // setCity,
        // position,
        // setPosition,

        state,
        setState,
      }}
    >
      {children}
    </userActivity.Provider>
  );
};

export default UserActivity;
