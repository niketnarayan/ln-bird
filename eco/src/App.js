import './App.css';
import Contact from './Components/Contact';
import Footer from './Components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import VitamincFacewash from './Components/vitamincFacewash';
import Antiacnefacewash from './Components/Antiacnefacewash';
import Goldscrubfacewash from './Components/Goldscrubfacewash';
import Antihairfallshampoo from './Components/Antihairfallshampoo';
import Rosemaryhairoil from './Components/Rosemaryhairoil';
import Hairserum from './Components/Hairserum';
import Glutasoap from './Components/Glutasoap';
import Home1 from './Components/home1';



function App() {
  return (
    
    <BrowserRouter>

<div>
    
    <Routes>

    <Route path='/' element={<Home1/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/vitamincfacewash' element={<VitamincFacewash/>}/>
    <Route path='/antiacnefacewash' element={<Antiacnefacewash/>}/>
    <Route path='/goldscrubfacewash' element={<Goldscrubfacewash/>}/>
    <Route path='/antihairfallshampoo' element={<Antihairfallshampoo/>}/>
    <Route path='/rosemaryhairoil' element={<Rosemaryhairoil/>}/>
    <Route path='/hairserum' element={<Hairserum/>}/>
    <Route path='/glutasoap' element={<Glutasoap/>}/>
    </Routes>
    
    {/* <Home/> */}
   
    
   
{/* 
    <Antiacnefacewash/> */}
    
   {/* <VitamincFacewash/> */}

    {/* <Home/> */}
    {/* <Footer/> */}
    {/* <Contact /> */}
    </div>
    </BrowserRouter>
    
    
  );
}

export default App;
