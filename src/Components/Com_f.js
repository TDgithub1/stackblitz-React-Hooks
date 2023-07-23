import React from 'react';
import Com_s from './Com_s';

import React, { useContext } from 'react';
import { userAuth } from '../App';

const Com_f = () => {
  const { username } = useContext(userAuth);

  return (
    <div>
      Com_f {username}
      <Com_s />
    </div>
  );
};

export default Com_f;
