import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 font-poppins flex items-center justify-between text-white text-base">
      <Link href="/">
      <div className='flex items-center space-x-2 hover:text-gray-300 mr-2'>
        <div className='flex items-center justify-center'>
          <Image src="/images/logo-dormihub.svg" width={30} height={20} alt="Logo DormiHub"/>
        </div>
        <div>
          DormiHub
        </div>
      </div>
      </Link>
      <div className='flex'>

      <div className='ml-4 mr-4'>
        <div className="hover:text-gray-300 cursor-pointer">
          <Link href="/">
            <div>Home</div>
          </Link>
        </div>
      </div>

      <div className='ml-4 mr-4'>
        <div className="hover:text-gray-300 cursor-pointer">
          <Link href="/book">
            <div>Book Now</div>
          </Link>
        </div>
      </div>

      <div className='ml-4 mr-4'>
        <div className="hover:text-gray-300 cursor-pointer">
          <Link href="/photos">
            <div>Photos</div>
          </Link>
        </div>
      </div>

      <div className='ml-4 mr-4'>
        <div className="hover:text-gray-300 cursor-pointer">
          <Link href="/login">
            <div>Login</div>
          </Link>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
