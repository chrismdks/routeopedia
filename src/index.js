import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product/Product'
import ProductDetails from './Pages/Product/ProductDetails'
import ProductList from './Pages/Product/ProductList'
import CreateProduct from './Pages/Product/CreateProduct'
import NotFound from './Pages/NotFound'
import CryptoDetail from './Pages/CryptoDetail'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Header />

    <Routes>
      {/* 
        path="/" means default page of the app, which is typically Home.jsx 
        element: which component is going to displayed if you type the path "/" 
        Also we have to change href in Header.jsx for each route below.
        This way when we click, for example the About button in navbar, it will route us to the right component
        Problem: everytime we click on one of the navbar buttons, the whole application is reloading. This is not an ideal approach.
        We want to rerender, not to completely reload the page.
        To fix that, in Header.jsx, we will use the special <Link/> component of react router dom, instead of <a/> component of HTML.
        With <Link/> component we use "to" instead of "href"
      */}
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>

      {/* 
        with ":" react understands that :cryptoSymbol is not part of the route name. 
        It's a placeholder for a value we will pass
        We want to use cryptoSymbol and display it in CryptoDetail.jsx : useParams() hook
        We can use as many parameters as we want. For example: path="/cryptodetail/:cryptoSymbol/:id"
      */}
      <Route path="/cryptodetail/:cryptoSymbol" element={<CryptoDetail/>}></Route>

      <Route path="/product"> {/* it automatically adds a "/" in the end */}
        <Route path="" element={<Product/>}></Route> {/* instead of path="", we can write index as well */}
        <Route path="details" element={<ProductDetails/>}></Route>
        <Route path="list" element={<ProductList/>}></Route>
        <Route path="create" element={<CreateProduct/>}></Route>
      </Route>

      {/* 
        path="*" means an invalid path.
        We add it to the root level (inside Routes) if we want it to work for the entire application.
        If we want to redirect to another page - and not in NotFound - when we search for an invalid path in a nested component, then we add another one in the nested route.
      */}
      <Route path="*" element={<NotFound/>}></Route>

    </Routes>

  </BrowserRouter>
);