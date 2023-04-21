import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

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
    </Routes>

  </BrowserRouter>
);