import useRegionStore from '../../store/region';

const RegionTag = ({ text }) => {
  const { region, setRegion } = useRegionStore();

  if (text === region) {
    return (
      <button
        disabled
        className='rounded-full bg-blue px-3 py-0.5 text-base text-white'
      >
        {text}
      </button>
    );
  }

  return (
    <button
      onClick={() => setRegion(text)}
      className='rounded-full bg-white px-3 py-0.5 text-base text-gray-800'
    >
      {text}
    </button>
  );
};

export default RegionTag;
