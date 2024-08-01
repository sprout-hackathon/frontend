import { useState } from 'react';

const ApplyCard = ({
  data,
  selected = false,
  onSelect = undefined,
  disabled = false,
}) => {
  const [status, setStatus] = useState('지원중'); // 지원중, 합격, 탈락

  let address = data.recruitment.hospital.address;
  delete address.addressId;
  address = Object.values(address).join(' ');

  const handleSelect = () => {
    if (!disabled && !selected) onSelect();
  };

  return (
    <button
      onClick={handleSelect}
      className={
        selected ? 'card mx-5 list-none border-blue' : 'card mx-5 list-none'
      }
    >
      <div>
        <p className='mb-0.5 text-base font-bold'>
          {data.recruitment.hospital.name}
        </p>
        <p className='truncate text-xs text-gray-400'>{address}</p>
      </div>
      <hr className='my-2' />
      <p className='mb-1 text-sm'>
        <span className='mr-3 font-semibold'>경력</span>
        {data.recruitment.requiredExp}
      </p>
      <p className='mb-1 text-sm'>
        <span className='mr-3 font-semibold'>근무</span>주{' '}
        {data.recruitment.conditionsDay}일 {data.recruitment.conditionsHour}시간
      </p>
      <p className='mb-1 flex flex-row items-center text-sm'>
        <span className='mr-3 font-semibold'>월급</span>
        <span className='rounded-lg border border-gray-400 bg-gray-300 px-2 py-0.5 text-[13px]'>
          {data.recruitment.salary}
        </span>
        <span className='ml-auto w-16 rounded-lg bg-blue py-1 text-center text-[13px] text-white'>
          {data.state}
        </span>
      </p>
    </button>
  );
};

export default ApplyCard;
