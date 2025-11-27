import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './screens/Home'; // Assuming you have a Home component
import WomenProducts from './screens/WomenProducts'; // Assuming you have a component for women's products
import MenProducts from './screens/MenProducts'; // Assuming you have a component for men's products
// import KidsProducts from './screens/KidsProducts'; // Assuming you have a component for kid's products
// import AccessoriesProducts from './screens/AccessoriesProducts'; // Assuming you have a component for accessories
// import CosmeticsProducts from './screens/CosmeticsProducts'; // Assuming you have a component for cosmetics
import Details from './screens/Details'; // Assuming you have a component for cosmetics
import CartDetails from './screens/cartedItems'; // Assuming you have a component for cosmetics
import ProceedToPayment from './screens/proceedToPayment';
// import Jewellary from './screens/Jewellary';
import Contact from './components/Contact';
import Electronics from './components/Electronics';
// import Register from './components/login';
import Jewellaryproduct from './screens/Jewellary';
// import Login from './components/signup';
// import Signin from './components/signup';
// import Signin from './components/signup';
import Register from './components/signup';
import Signin from './components/login';
import ARegister from './components/adminsign';
import Admin from './components/admin';
import Ahome from './Adminhome/adminhome';
import AddProduct from './admin/addProduct/AddProduct';
import ListProduct from './admin/listproduct/ListProduct';
import HelpPage from './components/Help';





function App() {
  return (
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/women" element={<WomenProducts />} />
          <Route path="/men" element={<MenProducts />} />
          <Route path="/jewellary" element={<Jewellaryproduct />} />
          <Route path="/Electronics" element={<Electronics />} />
          
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<CartDetails />} />
          <Route path="/payment" element={<ProceedToPayment />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/asignup" element={<ARegister />} />
          <Route path="/alogin" element={<Admin />} />
          <Route path="/ahome" element={<Ahome />} />
          <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
        <Route path="/help" element={<HelpPage />} />


        </Route>
      </Routes>
  );
}

export default App;


