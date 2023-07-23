import React from 'react';
import Com_t from './Com_t';

import React, { useContext } from 'react';
import { userAuth } from '../App';

const Com_s = () => {
  const { username } = useContext(userAuth);

  return (
    <div>
      Com_s {username}
      <Com_t />
    </div>
  );
};

export default Com_s;
