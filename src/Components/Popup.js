import { useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';

const PopUp = (props, ref) => {
  const [show, setShow] = useState(false);

  useImperativeHandle(
    ref,

    () => {
      return {
        showPopUp: () => setShow(true),
        hidePopUp: () => setShow(false),
      };
    },

    []
  );

  if (!show) return null;

  return (
    <div className="myPopUp">
      <p>Data has been set</p>
    </div>
  );
};

export default forwardRef(PopUp); //must rap forwardref
