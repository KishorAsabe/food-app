import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Error from '../pages/Error'
import Body from "./components/Body";
import Restmenu from './components/Restmenu'





// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet /> {/* This will render child routes */}
      <Footer />
    </React.Fragment>
  );
};

const Body = () => {
  return <div>This is the body content!</div>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Body />} /> {/* This is nested under AppLayout */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="restaurant/:id" element={<Restmenu/>}/>
          <Route path="*" element={<Error />} />
        </Route>

       

      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
