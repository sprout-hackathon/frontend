import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BottomTab from './components/common/BottomTab/BottomTab';
import HomeDetail from './pages/HomeDetail';
import Chatbot from './pages/Chatbot';
import ChatLog from './pages/ChatLog';
import ChatLogDetail from './pages/ChatLogDetail';
import Mypage from './pages/Mypage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<HomeDetail />} />
        <Route path='/chatlog' element={<ChatLog />} />
        <Route path='/chatlog/detail/:id' element={<ChatLogDetail />} />
        <Route path='/chatbot' element={<Chatbot />} />
        <Route path='/mypage' element={<Mypage />} />
      </Routes>
      <BottomTab />
    </BrowserRouter>
  );
}

export default App;
