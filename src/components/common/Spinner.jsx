import spinner from '../../assets/spinner.svg';

const Spinner = ({ className }) => {
  return (
    <img src={spinner} alt='spinner' className={`animate-spin ${className}`} />
  );
};

export default Spinner;
