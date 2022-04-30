
import './App.css';
import RestoCreate from './Component/RestoCreate'
import RestoList from './Component/RestoList'
import RestoSearch from './Component/RestoSearch'
import RestoUpdate from './Component/RestoUpdate'
import Navbar from './Component/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home';
import LogIn from './Component/LogIn';
import LogOut from './Component/LogOut';
import PrivateComponent from './Component/PrivateComponent'

function App() {
  return (
    <>

      <BrowserRouter>


        <Routes>
        <Route element={<PrivateComponent />}>

          <Route path='/Create' element={<RestoCreate />} />
          <Route path='/List' element={<RestoList />} />
          <Route path='/Search' element={<RestoSearch />} />
          <Route path='/Update/:id' element={<RestoUpdate />} />
          <Route path='/' element={<Home />} />
          </Route>
          <Route path='/login' element={<LogIn />} />


          <Route path='/logout' element={<LogOut />} />
         

         
          {/* <Route path='/login' element={<Protected> <Home/> </Protected>}/> */}




        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
