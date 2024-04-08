
import logo from '../../../assets/logo.png'
import moment from 'moment';


const Header = () => {
  return (
    <div className='text-center gap-3' >
      <img className='mx-auto mb-3' src={logo} alt="" />
      <p className='font-semibold text-[18px] mb-2'>Journalism Without Fear or Favour</p>
      <p className='text-xl mb-5'>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;