import {  Routes, Route } from 'react-router-dom'




import Header from './Component/Header';
import Footer from './Component/Footer';

import Index from './Pages/Index';
import About from './Pages/About';
import Booking from './Pages/Booking';
import Contact from './Pages/Contact';
import Room from './Pages/Room';
import Service from './Pages/Service';
import Team from './Pages/Team';
import Testimonial from './Pages/Testimonial';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Edit_profile from './Pages/Edit_profile';

function App() {
  return (
    <Routes>
        
        <Route path='/' index element={<> <Header/> <Index/>  <Footer/> </> }></Route>
        <Route path='/about' element={<> <Header/> <About/> <Footer/> </> }></Route>
        <Route path='/booking' element={<> <Header/> <Booking/> <Footer/> </> }></Route>
        <Route path='/contact' element={<> <Header/> <Contact/> <Footer/> </> }></Route>
        <Route path='/room' element={<> <Header/> <Room/> <Footer/> </> }></Route>
        <Route path='/service' element={<> <Header/> <Service/> <Footer/> </> }></Route>
        <Route path='/team' element={<> <Header/> <Team/> <Footer/> </> }></Route>

        <Route path='/signup' element={<> <Header/> <Signup/> <Footer/> </> }></Route>
        <Route path='/login' element={<> <Header/> <Login/> <Footer/> </> }></Route>
        <Route path='/profile' element={<> <Header/> <Profile/> <Footer/> </> }></Route>
        <Route path='/edit_profile/:id' element={<> <Header/> <Edit_profile/> <Footer/> </> }></Route>
        
        <Route path='/testimonial' element={<> <Header/> <Testimonial/> <Footer/> </> }></Route>
    </Routes>
  );
}

export default App;
