import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner';
import Banner2 from './Components/Banner2';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Productslider from './Components/Productslider';
import Shopslider from './Components/Shopslider';
import Slider from './Components/Slider';
import Home from './Components/Home';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/Contactus' element={<Contactus/>}/>
        
      
    </Routes>
    
    </BrowserRouter>
    
    {/* <Navbar/>
    <Slider/>
    <Shopslider/>
    <Banner/>
    <Productslider/>
    <Banner2/>
    <Footer/> */}
    {/* <Contactus/> */}
    
    
    
    </>
  );
}

export default App;
