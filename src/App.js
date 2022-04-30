
import './App.css';
import RestoCreate from './Component/RestoCreate'
import RestoList from './Component/RestoList'
import RestoSearch from './Component/RestoSearch'
import RestoUpdate from './Component/RestoUpdate'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home';
import LogIn from './Component/LogIn';


function App() {
  return (
    <>

    <BrowserRouter>
    <Home />
      <Routes>
        <Route path='/Create' element={<RestoCreate />} />
        <Route path='/List' element={<RestoList />} />
        <Route path='/Search' element={<RestoSearch />} />
        <Route path='/Update/:id' element={<RestoUpdate />} />
        <Route path='/login' element={<LogIn />} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
