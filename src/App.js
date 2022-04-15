import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home/Home';
import NavBar from './components/Shared/NavBar/NavBar';
import Services from '../src/components/Pages/Home/Services/Services'
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import NotFound from './components/Shared/NotFound/NotFound';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import ServiceDetails from './components/Pages/Home/Services/ServiceDetails/ServiceDetails';
import { createContext, useState } from 'react';
import useServices from './hooks/useServices';
import Cart from './components/Pages/Cart/Cart';


export const ServiceContext = createContext();
function App() {
  const [services, setServices] = useState([])
  const [cart, setCart] = useState([]);
  const value = { services, setServices, cart, setCart }

  const addToCart = (service) => {
    const exist = cart.find(s => s.id === service.id)
    if (exist) {
      setCart(cart.map(s => s.id === service.id ? { ...exist, qty: exist.qty + 1 } : s))
    }
    else
    setCart([...cart, {...service, qty: 1}])

  }




  return (
    <div className="App">
      <ServiceContext.Provider value={value}>
        <NavBar counCartItems={cart.length}></NavBar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home ></Home>}></Route>
          <Route path='/services' element={<Services addToCart = {addToCart}></Services>}></Route>
          <Route path='/service/:id' element={<ServiceDetails addToCart ={addToCart}></ServiceDetails>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/cart' element={<Cart addToCart = {addToCart} cart={cart} ></Cart>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </ServiceContext.Provider>

    </div>
  );
}

export default App;
