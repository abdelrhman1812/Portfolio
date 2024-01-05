import React from 'react';
import { RouterProvider, createHashRouter, redirect } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
function App() {



  const routers = createHashRouter([




    {
      path: '', element: <Layout />,
      children: [
        { index: true, loader: () => redirect("") }]
    }
  ])

  return <>
    <RouterProvider router={routers} />



  </>
}

export default App;
