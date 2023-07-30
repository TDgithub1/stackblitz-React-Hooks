import { useState } from 'react';

//send values
const useMyInput = (parInput1, parInput2, parInput3) => {
  const [input1, setInput1] = useState(parInput1);
  const [input2, setInput2] = useState(parInput2);
  const [input3, setInput3] = useState(parInput3);

  return [input1, input2, input3, setInput1, setInput2, setInput3];
};

export default useMyInput;

//custom hook

//cant be jss return,need to write as a array return

//without sending values(empty value)
// const  useMyInput = () => {

//   const [name, setName] = useState('');
//   const [city, setCity] = useState('');
//   const [age, setAge] = useState('');

//   return[name,age,city,setName,setCity,setAge]

// }
