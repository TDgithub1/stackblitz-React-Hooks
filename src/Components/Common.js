import React, { useRef } from 'react';

import useMyFetchData from '../Hooks/useMyFetchData';

const Common = () => {
  const [data, setData] = useMyFetchData();

  const inputData = useRef();

  console.log(data);

  return (
    <div>
      <input
        type="text"
        placeholder="What you want to search"
        ref={inputData}
      />

      <button
        onClick={() => {
          setData(inputData.current.value);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Common;
