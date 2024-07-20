import { Link } from 'react-router-dom';
import rightChevronIcon from '../../assets/icons/right-chevron.svg';

const InfoCard = ({ data }) => {
  let address = data.hospital.address;
  delete address.addressId;
  address = Object.values(address).join(' ');

  return (
    <li className='list-none rounded-2xl border bg-gray-50 p-4'>
      <Link to={`/detail/${data.recruitmentId}`}>
        <div className='flex flex-row'>
          <div>
            <p className='mb-0.5 text-base font-bold'>{data.hospital.name}</p>
            <p className='truncate text-xs text-gray-400'>{address}</p>
          </div>
          <img src={rightChevronIcon} alt='chevron icon' className='ml-auto' />
        </div>
        <hr className='my-2' />
        <p className='mb-1 text-sm'>
          <span className='mr-3 font-semibold'>경력</span>
          {data.requiredExp}년
        </p>
        <p className='mb-1 text-sm'>
          <span className='mr-3 font-semibold'>근무</span>
          {`주 ${data.conditionsDay}일 ${data.conditionsHour}시간`}
        </p>
        <p className='mb-1 text-sm'>
          <span className='mr-3 font-semibold'>월급</span>
          <span className='rounded-md border border-gray-400 bg-gray-300 px-1 py-0.5 text-[13px]'>
            {data.salary}원
          </span>
        </p>
      </Link>
    </li>
  );
};

export default InfoCard;
