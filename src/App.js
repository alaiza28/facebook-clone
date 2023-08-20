
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home'
import Account from './pages/Account/Account'
 //import dummy from './components/dummyPostData'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
 const [data, setData] = useState([])
 console.log(data)
  return (
    <BrowserRouter>
      <Topbar />
    <div className="container">
      <Sidebar />
     <Routes>
      <Route path='/' element={<Home data={data} setData={setData}/>}/>
      <Route path='/account' element={<Account />}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
