import { useLocation, Link } from 'react-router-dom';

const BottomTabButton = ({ text, path, blueIcon, grayIcon }) => {
  const location = useLocation();
  return (
    <Link to={path} className='w-1/5'>
      {location.pathname === path ? (
        <>
          <img src={blueIcon} alt='home icon' className='mx-auto mb-px' />
          <p className='text-center text-xs text-blue'>{text}</p>
        </>
      ) : (
        <>
          <img src={grayIcon} alt='home icon' className='mx-auto mb-px' />
          <p className='text-center text-xs text-gray-400'>{text}</p>
        </>
      )}
    </Link>
  );
};

export default BottomTabButton;
