import Link from 'next/link';
import Image from 'next/image';

const NavbarAdmin = () => {
  return (
    <nav className="bg-black p-4 font-poppins flex items-center justify-between text-white text-base">
      <Link href="/">
      <div className='flex items-center space-x-2 hover:text-gray-300 mr-2'>
        <div className='flex items-center justify-center'>
          <Image src="/images/logo-dormihub.svg" width={30} height={20} alt="Logo DormiHub"/>
        </div>
        <div>
          DormiHub Admin
        </div>
      </div>
      </Link>
      <div className='flex'>

      

      

      
    

      <div className='ml-4 mr-4'>
        <div className="hover:text-gray-300 cursor-pointer">
          <Link href="/login">
            <div>LOGOUT</div>
          </Link>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
