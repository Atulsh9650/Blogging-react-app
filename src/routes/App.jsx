import { useState } from 'react'
import Header from '../componenets/Header'
import Sidebar from '../componenets/Sidebar';
import Footer from '../componenets/Footer';
import Blog from '../componenets/BLog';
import Createblog from '../componenets/Createblog';
import Bloglist from '../componenets/Bloglist';
import Bloglistprovider from '../store/Blog-list-store';
import { Outlet } from 'react-router-dom';

function App() {
  return  (
    <Bloglistprovider>
  <div className='main-container'>
     <div className='head-container'>
      <Sidebar />
      <div className="content-container">
      <Header /> 
      <div className='Blog-container'>
      <Outlet />
      </div>
      </div>
    </div>
    <Footer />
  </div>
  </Bloglistprovider>
  );
}

export default App
