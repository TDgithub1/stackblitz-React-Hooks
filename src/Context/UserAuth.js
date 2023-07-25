import React, { createContext, useState } from 'react';

export const userData = createContext({});

const UserAuth = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    password: '',
    userid: '',
  });

  return (
    <userData.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </userData.Provider>
  );
};

export default UserAuth;
