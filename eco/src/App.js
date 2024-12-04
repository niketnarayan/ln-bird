import './App.css';
import Contact from './Components/Contact';
import Footer from './Components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import VitamincFacewash from './Components/vitamincFacewash';


function App() {
  return (
    
    <BrowserRouter>

<div>
    
    {/* <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes> */}
    
    
   
    
   

    
    
   <VitamincFacewash/>

    {/* <Home/> */}
    {/* <Footer/> */}
    {/* <Contact /> */}
    </div>
    </BrowserRouter>
    
    
  );
}

export default App;
