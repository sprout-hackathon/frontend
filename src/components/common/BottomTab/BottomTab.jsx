import BottomTabButton from './BottomTabButton';

import homeGrayIcon from '../../../assets/icons/home-gray.svg';
import homeBlueIcon from '../../../assets/icons/home-blue.svg';
import historyGrayIcon from '../../../assets/icons/history-gray.svg';
import historyBlueIcon from '../../../assets/icons/history-blue.svg';
import communityGrayIcon from '../../../assets/icons/community-gray.svg';
import communityBlueIcon from '../../../assets/icons/community-blue.svg';
import mypageGrayIcon from '../../../assets/icons/mypage-gray.svg';
import mypageBlueIcon from '../../../assets/icons/mypage-blue.svg';
import ChatbotButton from './ChatbotButton';

const BottomTab = () => {
  return (
    <div className='flex h-20 flex-row items-center justify-stretch rounded-t-xl border bg-white'>
      <BottomTabButton
        text='홈'
        path='/'
        blueIcon={homeBlueIcon}
        grayIcon={homeGrayIcon}
      />
      <BottomTabButton
        text='챗봇 내역'
        path='/history'
        blueIcon={historyBlueIcon}
        grayIcon={historyGrayIcon}
      />
      <ChatbotButton />
      <BottomTabButton
        text='커뮤니티'
        path='/community'
        blueIcon={communityBlueIcon}
        grayIcon={communityGrayIcon}
      />
      <BottomTabButton
        text='마이페이지'
        path='/mypage'
        blueIcon={mypageBlueIcon}
        grayIcon={mypageGrayIcon}
      />
    </div>
  );
};

export default BottomTab;
