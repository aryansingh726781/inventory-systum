// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
// import AuthForm from './components/AuthForm';
// import ProductList from './components/ProductList';
// import OrderProduct from './components/OrderProduct';

// function App() {
//   return (
//     <div>
//    <Router>
//       <Routes>
//         <Route path="/login" element={<AuthForm isRegister={false} />} />
//         <Route path="/register" element={<AuthForm isRegister={true} />} />
//         <Route path="/products" element={<ProductList isVendor={false} />} />
//         <Route path="/vendor/products" element={<ProductList isVendor={true} />} />
//         <Route path="/order" element={<OrderProduct />} />
//         {/* Add more routes as necessary */}
//       </Routes>
//     </Router>
//     </div>

     
  
//   );
// }

// export default App;



import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes, Link, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ReviewProduct from './components/ReviewProduct';
import OrderProduct from './components/OrderProduct';
import TrackOrder from './components/TrackOrder';
import {Navbar  } from './components/Navbar';
import { Home } from './components/Home';
function App() {
    return (
        <Router>
            < Navbar/>
            <div>
                {/* Navigation */}
                {/* <nav>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/addProduct">Add Product</Link>
                    <Link to="/reviewProduct">Review Product</Link>
                    <Link to="/orderProduct">Order Product</Link>
                    <Link to="/trackOrder">Track Order</Link>
                </nav> */}
             

                {/* Routes */}
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path="/register" element={<Register/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/addProduct" element={<AddProduct/>} />
                    <Route path="/reviewProduct" element={<ReviewProduct/>} />
                    <Route path="/orderProduct" element={<OrderProduct/>} />
                    <Route path="/trackOrder" element={<TrackOrder/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
