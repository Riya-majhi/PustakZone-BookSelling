import * as React from "react";
import './App.css';
import Header from "./components/Header";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SignIn from "./pages/Signin";
import Signup from "./pages/Signup";
import AdminLogin from "./pages/AdminLogin";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Bookdetails from "./components/Book-details";
import Confirmation from "./pages/Confirmation";
import Homeadmin from "./admin-pages/Home-admin";
import BookTable from "./admin-pages/BookTable";
import UserTable from "./admin-pages/UserTable";
import AddBook from "./admin-pages/AddBook";
import OrderTable from "./admin-pages/OrderTable";
import EbookPayment from "./pages/EbookPayment";
import PaperBookPayment from "./pages/PaperBookPayment";



function App() {
  return (
    <>
    {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products/" element={<Products />} />
        <Route path="/Contact/" element={<Contact />} />
        <Route path="/Signin/" element={<SignIn />} />
        <Route path="/Signup/" element={<Signup />} />
        <Route path="/Book-details/:id" element={<Bookdetails />} />
        <Route path="/Book-details/:id/Confirmation/:id" element={<Confirmation />} />
        <Route path="/Confirmation/:id" element={<Confirmation />} />
        <Route path="/Home-admin/" element={<Homeadmin />} />
        <Route path="/admin/" element={<AdminLogin />} />
        <Route path="/BookTable/" element={<BookTable />} />
        <Route path="/UserTable/" element={<UserTable />} />
        <Route path="/OrderTable/" element={<OrderTable />} />
        <Route path="/AddBook/" element={<AddBook/>} />
        <Route path="/EbookPayment/:id" element={<EbookPayment/>} />
        <Route path="/PaperBookPayment/:id" element={<PaperBookPayment/>} />


      </Routes>
     
    </>
  );
}

export default App;
