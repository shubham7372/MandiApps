import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar.js";
import Login from "./components/Home/Login.js";
import Home from "./components/Layout/Home.js";
import Signup from "./components/Home/Signup.js";
import Contact from "./components/mandi/Contact.js";
import Animals from "./components/Animals/AnimalsHome/Animals.js";
import Crops from "./components/Crops/Crophome/Crops.js";
import Fertilizer from "./components/Fertilizer/Fertilizerhome/Fertilizer.js";
import PrivateRoute from "./components/Farmer/PrivateRoute/PrivateRoute.js";
import DashBoard from "./components/Farmer/DashBoard.js";
import Service from "./components/service/Service.js";
import About from "./components/About/About.js";
import Footer from "./components/Layout/Footer.js";
import Cowproduct from "./components/Animals/Cowsproduct/Cowproduct.jsx";
import Product from "./components/Animals/Buffaloproduct/Product.jsx";
import Goatproduct from "./components/Animals/Goatproduct/Goatproduct.jsx";
// import Profile from "./components/Dashboard/Profile.jsx";
// Dashboard
import Sidebar from "./components/Dashboard/components/Sidebar.jsx";
import Dashboard from "./components/Dashboard/pages/Dashboard.jsx";
import User from "./components/Dashboard/pages/UserList.jsx";
import Analytics from "./components/Dashboard/pages/Analytics.jsx";
import Comment from "./components/Dashboard/pages/Comment.jsx";
import Userlist from "./components/Dashboard/pages/Product.jsx";
import ProductList from "./components/Dashboard/pages/ProductList.jsx";
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route exact path="/farmer" element={<PrivateRoute />}>
            <Route exact path={`dashboard`} element={<DashBoard />} />
          </Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Animals" element={<Animals />}></Route>
          <Route path="/Crops" element={<Crops />}></Route>
          <Route path="/Fertilizer" element={<Fertilizer />}></Route>
          <Route path="/allanimal" element={<Animals />}></Route>
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="Animals/Cows/Product" element={<Cowproduct />}></Route>
          <Route path="Animals/Buffalo/Product" element={<Product />}></Route>
          <Route path="Animals/Goat/Product" element={<Goatproduct />}></Route>
          {/* <Route path="/Profile" element={<Profile />}></Route> */}
          {/* Dashboard */}
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/User" element={<User />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/Userlist" element={<Userlist />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
