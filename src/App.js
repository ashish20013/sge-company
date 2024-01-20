import React from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from './component/pages/home/Home';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Upheader from './component/upheader/Upheader';
import Product from './component/pages/our-product/Product';
import About from './component/pages/about/About';
import Partner from './component/partners/Partner';
import Inqury from './component/pages/inqury/Inqury';
import Contact from './component/pages/contact/Contact';



function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Baselayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='product' element={<Product />} />
          <Route path='partner' element={<Partner/>} />
          <Route path='inqury' element={<Inqury />} />
          <Route path='contact' element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    

  );
}

export default App;



const Baselayout = () => {
  return (
    <>
      <Upheader />
      <Header />

      <Outlet />


      <Footer />
    </>
  )
}


