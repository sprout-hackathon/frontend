import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BottomTab from './components/common/BottomTab/BottomTab';
import HomeDetail from './pages/HomeDetail';
import Chatbot from './pages/Chatbot';
import Login from './pages/Login'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/detail/:id' element={<HomeDetail />} />
        <Route path='/chatbot' element={<Chatbot />} />
      </Routes>
      <BottomTab />
    </BrowserRouter>
  );
}

export default App;
