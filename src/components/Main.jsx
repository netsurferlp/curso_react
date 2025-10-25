import React from 'react'
import { Routes, Route } from "react-router-dom";

import Product from './Product';
import ProductDetail from '../components/ProductDetail';
import Home from '../pages/Home'
import Service from '../pages/Service'
import About from '../pages/About';


const Main = () =>  {

    return (
<>

<Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />     
     <Route path='/product' element={<Product />} />
      <Route path='/service' element={<Service />} />
      <Route path='/product/:id' element={<ProductDetail />} />
</Routes>


</>
    )
}






export default Main 
