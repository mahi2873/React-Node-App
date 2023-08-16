import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import FirstNav from "./components/FirstNav";
import SecondNav from "./components/SecondNav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import CartComp from "./components/CartComp";
import AllWomenProducts from "./pages/AllWomenProducts";
import AllMenProducts from "./pages/AllMenProducts";
import WomenDresses from "./pages/WomenDresses";
import WomenPants from "./pages/WomenPants";
import WomenSkirts from "./pages/WomenSkirts";
import MenShirts from "./pages/MenShirts";
import MenHoodies from "./pages/MenHoodies";
import MenPants from "./pages/MenPants";
import MenShorts from "./pages/MenShorts";
import Kids from "./pages/Kids";
import PaymentPage from "./pages/PaymentPage";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <FirstNav/>
    <SecondNav/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/allProducts" element={ <Products/> }/>
    <Route path="/allWomen" element={ <AllWomenProducts/> }/>
    <Route path="/allMen" element={ <AllMenProducts/> }/>
    <Route path="/womenDresses" element={ <WomenDresses/> }/>
    <Route path="/womenPants" element={ <WomenPants/> }/>
    <Route path="/womenSkirts" element={ <WomenSkirts/> }/>
    <Route path="/menShirts" element={ <MenShirts/> }/>
    <Route path="/menHoodies" element={ <MenHoodies/> }/>
    <Route path="/menPants" element={ <MenPants/> }/>
    <Route path="/menShorts" element={ <MenShorts/> }/>
    <Route path="/kids" element={ <Kids/> }/>
    <Route path="/contacts" element={ <Contact/> }/>
    <Route path="/cartLogin" element={ <Cart/> }/>
    
    {/* <Route element={<PrivateComponent/>}> */}
    <Route path="/addToCart" element={ <CartComp/> }/>
    <Route path="/paymentpage" element={ <PaymentPage/> }/>
    <Route path="/logout" element={ <Login/> }/>
    {/* </Route> */}
    
    <Route path="/login" element={ <Login/> }/>
    <Route path="/register" element={ <Register/> }/>
    </Routes>
    <Footer/> 
    </BrowserRouter> 
    </>
  )
}
export default App