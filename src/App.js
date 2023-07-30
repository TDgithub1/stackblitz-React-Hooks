import React, { useRef } from 'react';
import './style.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Post from './Components/Post';
import PostUnit from './Components/PostUnit';
import Common from './Components/Common';

export default function App() {
  const router = createBrowserRouter([
    {
      Path: '/',
      element: <Common />,
    },

    {
      Path: 'post',
      element: <Post />,
    },
    {
      path: 'post/id:',
      element: <PostUnit />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
