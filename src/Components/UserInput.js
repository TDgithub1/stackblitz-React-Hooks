import React, { useContext, useRef } from 'react';

import { userActivity } from '../Context/UserActivity';

import { userData } from '../Context/UserAuth';

//import { submitUserActivity } from '../Utils/authValidate';

import { Action } from '../Utils/authValidate';

const UserInput = () => {
  const {
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
  } = useContext(userActivity);

  const { userDetails } = useContext(userData);

  const imageRef = useRef();
  const nameRef = useRef();
  const cityRef = useRef();
  const positionRef = useRef();

  return (
    <div>
      <br />
      <br />

      {userDetails.userid ? (
        <div>
          <span>Image : </span>
          <input type="text" placeholder="image url" ref={imageRef} />
          <br />
          <span>Name : </span>
          <input type="text" placeholder="your name" ref={nameRef} />
          <br />
          <span>City: </span>
          <input type="text" placeholder="your city" ref={cityRef} />
          <br />
          <span>Position : </span>
          <input type="text" placeholder="your position" ref={positionRef} />
          <br />
          <button
            onClick={() =>
              // submitUserActivity(
              //   imageRef,
              //   nameRef,
              //   cityRef,
              //   positionRef,
              //   setImage,
              //   setName,
              //   setCity,
              //   setPosition
              // )

              setState({
                type: Action.setData,
                data: {
                  image: imageRef.current.value,
                  name: nameRef.current.value,
                  city: cityRef.current.value,
                  position: positionRef.current.value,
                },
              })
            }
          >
            Submit
          </button>
          <br />
          <br />
          {/* <p>{image}</p>
          <p>{name}</p>
          <p>{city}</p>
          <p>{position}</p> */}
          <p>{state.image}</p>
          <p>{state.name}</p>
          <p>{state.city}</p>
          <p>{state.position}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default UserInput;

//commented things use when without usereducer hook
