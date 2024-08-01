import editIcon from '../../assets/icons/edit-gray.svg';
import deleteIcon from '../../assets/icons/delete-gray.svg';
import { Link } from 'react-router-dom';

const HistoryCard = ({ data, editable = false }) => {
  let address = data?.hospital.address;
  delete address.addressId;
  address = Object.values(address).join(' ');

  const handleDelete = () => {
    //
  };

  return (
    <li className='card mx-5 list-none'>
      <div>
        <p className='mb-0.5 text-base font-bold'>{data.hospital.name}</p>
        <p className='truncate text-xs text-gray-400'>{address}</p>
      </div>
      <hr className='mb-3 mt-2' />
      <div className='flex flex-row'>
        <span className='rounded-md border border-gray-400 bg-gray-300 px-2 py-px text-[13px]'>
          {data.workDuration}
        </span>
        {editable && (
          <>
            <Link to={`edit/${data.workHistoryId}`} className='ml-auto'>
              <img src={editIcon} alt='edit icon' />
            </Link>
            <button onClick={handleDelete} className='ml-3'>
              <img src={deleteIcon} alt='delete icon' />
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default HistoryCard;
