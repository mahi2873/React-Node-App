import Navbar from "./components/Navbar"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AddSales from "./pages/AddSales";
import TopSales from "./pages/TopSales";
import Revenue from "./pages/Revenue";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.css'
import PrivateComponent from "./components/PrivateComponent";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={ <h1>Sales Page</h1> }/>
        <Route path="/addSales" element={ <AddSales/> }/>
        <Route path="/topFiveSales" element={ <TopSales/> }/>
        <Route path="/totalRevenue" element={ <Revenue/> }/>
        <Route path="/logout" element={ <Login/> }/>
        </Route>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/register" element={ <Register/> }/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App