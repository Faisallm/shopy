import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* mounting the navbar component */}
      {/* we have to wrap all of the components with
      browser-router */}
      <BrowserRouter>
      {/* navigation bar */}
        <Navbar />
        {/* routes to other pages of the website */}
        {/* indicating that this is where the pages are to be
        displayed when we want to visit them with Link */}
        <Routes>

          <Route path="/" element={<Shop/>}/>
          {/* adding props */}
          <Route path="/mens" element={<ShopCategory category='men'/>}/>
          <Route path="/womens" element={<ShopCategory category='women'/>}/>
          <Route path="/kids" element={<ShopCategory category='kid'/>}/>
          {/* so is this like saying we can have nested routing */}
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
