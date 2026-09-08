import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Products from "../pages/Products";
import Pay from "../pages/Pay";
import Login from "../pages/Login";
import AdminPanel from "../pages/AdminPanel";
import ProductForm from '../pages/ProductForm';
import ProductDelete from '../pages/ProductDelete';

import ProductDetail from "./ProductDetail";
import RouteProtected from "./RouteProtected";



import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
// Principal de la app


const  App = () => {
  return (
    <div>
      
           
            <Routes>
             
              {/* RUTAS PÚBLICAS */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/products/:category/:id" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
             
              {/* RUTA PROTEGIDA - para Usuarios */}
              <Route path="/pay" element={<RouteProtected><Pay /></RouteProtected>}/>
             
              {/* RUTA PROTEGIDA - para Admins */}
              <Route path="/adminpanel" element={<RouteProtected onlyAdmin={true}><AdminPanel /></RouteProtected>}/>
             
              {/* Ruta para formulario Agrega/Edita*/}
              <Route
                path="/productform"
                element={
                  <RouteProtected>
                    <ProductForm />
                  </RouteProtected>
                }
              />
             
              {/* Ruta para ELIMINAR producto */}
              <Route
                path="/productdelete"
                element={
                  <RouteProtected>
                    <ProductDelete />
                  </RouteProtected>
                }
              />
             
              {/* Redirección por defecto */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              closeOnClick
              draggable
              pauseOnHover
              theme="dark"
            />
    
    </div>
  );
} 


export default App;