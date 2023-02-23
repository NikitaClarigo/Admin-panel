import React, { useEffect,useState } from 'react';
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import Home from "../../pages/home/Home";
import UserList from "../../pages/userList/UserList";
import User from "../../pages/user/User";
import NewUser from "../../pages/newUser/NewUser";
import ProductList from "../../pages/productList/ProductList";
import Product from "../../pages/product/Product";
import NewProduct from "../../pages/newProduct/NewProduct";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Dashboard() {
  return (
    <Router>
       <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}
