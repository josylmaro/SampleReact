import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from 'react';
import MainNav from './components/common/mainNav';
import routesConfig from './routes/routesConfig';

const router = createBrowserRouter(routesConfig);

function App() {
  return (
    <div>  
      <MainNav />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
