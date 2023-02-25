import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import ShoppingPage from './Component/ShoppingPage';
import Profile from './Component/Profile/Profile';
import Product from './Component/Product';
import ProductPage from './Component/ProductPage';
import Login from './Component/Profile/Login';
import UserLogin from './Component/Profile/UserLogin';
import PrivacyP from './Component/contactus/PrivacyP';
import ContactUs from './Component/contactus/ContactUs';
import Payment from './Component/Payment';
import Confirm from './Component/Confirm';
import Learn from './Component/Lear' 
import School from "./Component/School"

//500 to 599 internal server error
//400 -499 server not found
//200-299 passed
function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<UserLogin/>} />
                <Route path='/user' element={<Profile/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/confirm' element={<Confirm/>} />
                <Route path='/payment' element={<Payment/>} />
                <Route path='/contactinfo' element={<ContactUs/>} />
                <Route path='/contact' element={<PrivacyP/>} />
                <Route path='/products' element={<Product />} />
                <Route path='/products/:productId' element={<ProductPage/>} />
                <Route path='/cart' element={<ShoppingPage/>}/>
                <Route path='/learn' element={<Learn/>}/>
                <Route path='/school' element={<School/>}/>
                {/* <Route path='/login' element={<Login/>}/> */}

                {/* Match all paths */}
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
        </BrowserRouter>
  );
}

export default App;
