import React from 'react';
import './style.css';
import React, {
  useState,
  useTransition,
  useDeferredValue,
  useEffect,
} from 'react';

//useTransition & useDeferredValue use for chose first run code part

export default function App() {
  const [inputVal, setInpuVal] = useState('');
  const [data, setData] = useState([]);

  const finalInputVal = useDeferredValue(inputVal); //wait for change inputval then pass to data to value

  const [loading, delayFun] = useTransition();

  console.log(`inputVal is ${inputVal} and finalInputVal is ${finalInputVal}`);

  useEffect(() => {
    delayFun(() => {
      setData([]);

      fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((json) => setData(json));
    });
  }, [inputVal]);

  const inputHandle = (e) => {
    setInpuVal(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputVal} onChange={inputHandle} />

      {loading ? <h1>Loading</h1> : null}

      {data?.map(({ name }, index) => (
        <h2 key={index}>{name}</h2>
      ))}
    </div>
  );
}
