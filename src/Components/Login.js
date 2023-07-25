import React, { useContext, useRef } from 'react';

import { userData } from '../Context/UserAuth';

import { submitHandle } from '../Utils/authValidate';

const Login = () => {
  const { userDetails, setUserDetails } = useContext(userData);

  const usernameRef = useRef();
  const passwordRef = useRef();

  return (
    <div>
      {userDetails.userid ? (
        <p>Your are loggged in, your name is : {userDetails.name}</p>
      ) : (
        <>
          <span>Username : </span>
          <input type="text" placeholder="your username" ref={usernameRef} />
          <br />
          <span>Password : </span>
          <input
            type="password"
            placeholder="your password"
            ref={passwordRef}
          />
          <br />
          <button
            onClick={() =>
              submitHandle(usernameRef, passwordRef, setUserDetails)
            }
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default Login;

// this function send to the util for easy

// const submitHandle = () => {
//   setUserDetails((pre) => ({
//     ...pre,
//     userid: usernameRef.current.value,
//     password: passwordRef.current.value,
//     name: usernameRef.current.value, //overide name beacuse do not have database to get name
//   }));
// };
