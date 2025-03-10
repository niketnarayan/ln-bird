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
import Fruitsveg from './Components/Fruitsveg';
import Chickenmeat from './Components/Chickenmeat';
import BreakDairy from './Components/BreakDairy';
import Beverage from './Components/Beverage';
import Bread from './Components/Bread';
import Frozen from './Components/Frozen';
import Snacks from './Components/Snacks';
import Grocery from './Components/Grocery';
import Demo from './Components/Demo';


function App() {
  return (
   <div>

<BrowserRouter> 
    {/* <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/Contactus' element={<Contactus/>}/>
      <Route path='/fruits' element={<Fruitsveg/>}/>
      <Route path='/chicken' element={<Chickenmeat/>}/>
      <Route path='/dairy' element={<BreakDairy/>}/>
      <Route path='/beverage' element={<Beverage/>}/>
      <Route path='/bread' element={<Bread/>}/>
      <Route path='/frozen' element={<Frozen/>}/>
      <Route path='/snacks' element={<Snacks/>}/>
      <Route path='/grocery' element={<Grocery/>}/>
        
      
    </Routes> */}
    
    {/* <Fruitsveg/> */}
    {/* <Chickenmeat/> */}
    {/* <BreakDairy/> */}
    {/* <Beverage/> */}
    {/* <Bread/> */}
     </BrowserRouter>
     <Demo/>
 
 
     
    </div>
  );
}

export default App;
