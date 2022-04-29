
import './App.css';
import RestoCreate from './Component/RestoCreate'
import RestoList from './Component/RestoList'
import RestoSearch from './Component/RestoSearch'
import RestoUpdate from './Component/RestoUpdate'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home';



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

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
