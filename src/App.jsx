import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BottomTab from './components/common/BottomTab/BottomTab';
import HomeDetail from './pages/HomeDetail';
import Chatbot from './pages/Chatbot';
import ChatLog from './pages/ChatLog';
import ChatLogDetail from './pages/ChatLogDetail';
import Mypage from './pages/Mypage';
import EditProfile from './pages/EditProfile';
import Login from './pages/Login';
import ApplyList from './pages/ApplyList';
import History from './pages/History';
import Scrap from './pages/Scrap';
import Signup from './pages/Signup';

function App() {
  return (
    <div className='h-dvh w-full bg-black'>
      <div className='relative mx-auto h-dvh bg-white md:aspect-[375/814] lg:aspect-[375/814]'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/detail/:id' element={<HomeDetail />} />
            <Route path='/chatlog' element={<ChatLog />} />
            <Route path='/chatlog/detail/:id' element={<ChatLogDetail />} />
            <Route path='/chatbot' element={<Chatbot />} />
            <Route path='/mypage' element={<Mypage />} />
            <Route path='/mypage/edit' element={<EditProfile />} />
            <Route path='/mypage/apply' element={<ApplyList />} />
            <Route path='/mypage/history' element={<History />} />
            <Route path='/mypage/scrap' element={<Scrap />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
          <BottomTab />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
