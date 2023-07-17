import React from 'react';
import './style.css';
import React, { useReducer } from 'react';

const reducer = (state, action) => {
  if (action.type === 'setImage') {
    return { ...state, image: action.data };
  } else if (action.type === 'setName') {
    return { ...state, name: action.data };
  } else if (action.type === 'setCity') {
    return { ...state, city: action.data };
  } else if (action.type === 'setPosition') {
    return { ...state, position: action.data };
  } else if (action.type === 'setArray') {
    return { ...state, dataArray: [...state.dataArray, action.data] };
  } else {
    return state;
  }
};

export default function App() {
  const [state, setState] = useReducer(reducer, {
    name: '',
    image: '',
    city: '',
    position: '',
    dataArray: [],
  }); //react hook(can use differant name for reducer/reducer = function name)

  console.log(state);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter image Url"
        value={state.image}
        onChange={(e) =>
          setState({
            type: 'setImage',
            data: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Enter your name"
        value={state.name}
        onChange={(e) =>
          setState({
            type: 'setName',
            data: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Enter your city"
        value={state.city}
        onChange={(e) =>
          setState({
            type: 'setCity',
            data: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Enter your position"
        value={state.position}
        onChange={(e) =>
          setState({
            type: 'setPosition',
            data: e.target.value,
          })
        }
      />

      <button
        onClick={(e) =>
          setState({
            type: 'setArray',
            data: {
              image: state.image,
              name: state.name,
              city: state.city,
              position: state.position,
            },
          })
        }
      >
        Set Data
      </button>

      <div>Data div</div>
    </div>
  );
}
