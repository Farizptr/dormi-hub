import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 font-poppins flex text-white text-sm">
        <div className='flex'>
            <div className='flex items-center justify-center mr-1'>
                <Image src="/images/logo-dormihub.svg" width={20} height={20} alt="Logo DormiHub"/>
            </div>
            <div>
                DormiHub
            </div>
        </div>
        <div className='ml-3'>
            Home
        </div>
        <div className='ml-3'>
            Book Now
        </div>
        <div className='ml-3'>
            Photos
        </div>
        <Link href="/login">
            <div className='ml-3'>
                Login
            </div>
        </Link>
      {/* <ul className="flex space-x-4 text-white">
        <li className='flex'>
            <div className='mr-1'>
                <Image src="/images/logo-dormihub.svg" alt="logo dormihub" width={70} height={20}/>
            </div>
            <div>
                DormiHub
            </div>
            
        </li>
        <li>
          <Link href="/">
            <p className="hover:text-gray-300">Home</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p className="hover:text-gray-300">Book Now</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p className="hover:text-gray-300">Photos</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p className="hover:text-gray-300">Login</p>
          </Link>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
