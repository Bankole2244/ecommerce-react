import logo from './logo.svg';
import './App.css';
import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiOutlineBulb} from "react-icons/ai"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Signup from './pages/Signup';
import Login from './pages/Login'
import Details from './pages/Details'
import Checkout from './pages/checkout';
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';
import Cart from './pages/Cart'



function App() {
  return (

    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/signup' element={<Signup/>}/>
       <Route path= '/login' element={<Login/>} />
      <Route path='/details/:id'element={<Details/>}/>
      <Route path='/checkout'element={<Checkout/>}/> 
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
      <Footer/>
    </BrowserRouter>
  );
}


export default App



