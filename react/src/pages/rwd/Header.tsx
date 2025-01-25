import { Link } from '@tanstack/react-router';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 flex items-center w-full h-[6rem] px-[3rem] text-[3rem] bg-[#333]'>
      <Link to='/rwd' className='bg-black text-white h-full px-[1rem] rounded-md'>rem</Link>
    </header>
  );
};

export default Header;
