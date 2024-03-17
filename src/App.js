
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Footer/Footer';
import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Homepage from './HomePages/Homepage';
import About from './HomePages/about/About';
import Authors from './HomePages/authors/Authors';
import Cart from './HomePages/Cart/Cart';
import Login from './HomePages/forms/Login';
import Registar from './HomePages/forms/Registar';
import Contact from './HomePages/contact/Contact';
import Book from './HomePages/book/Book';
import Home from './HomePages/homeee/Home';






function App() {
  return (
  <BrowserRouter>
   <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/authors' element={<Authors/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Registar' element={<Registar/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/book/:id' element={<Book/>}/>
    </Routes>
   <Footer/>
  </BrowserRouter>
  );
}

export default App;
