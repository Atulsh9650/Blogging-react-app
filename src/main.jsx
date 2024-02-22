import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import './routes/index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Createblog from './componenets/Createblog.jsx';
import Bloglist from './componenets/Bloglist.jsx';
import Trending from './componenets/Trending.jsx';

const router=createBrowserRouter([
  {path:"/",element:<App />,children :[
    {path : "/",element: <Bloglist />},
    {path: "/create-blog",element: <Createblog />},
    {path: "/trending",element: <Trending />},
  ]},
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
