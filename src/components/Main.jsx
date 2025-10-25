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
        <Route path='/curso_react/' element={<Home/>} />
        <Route path='/curso_react/about' element={<About />} />     
     <Route path='/curso_react/product' element={<Product />} />
      <Route path='/curso_react/service' element={<Service />} />
      <Route path='/curso_react/product/:id' element={<ProductDetail />} />
</Routes>


</>
    )
}






export default Main 
