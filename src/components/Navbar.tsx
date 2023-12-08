'use client'

import { useState } from 'react';
import useAuth from '@hooks/useAuth';
import useToast from '@hooks/useToast';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const { auth, updateAuth } = useAuth();
  const router = useRouter()
  const showToast = useToast()

  const [menus, setMenus] = useState([
    {
      page: 'Home',
      url: '/'
    },
    {
      page: 'Book now',
      url: '/book'
    },
    {
      page: 'Photos',
      url: '/photos'
    }
  ])

  const handleLogout = () => {
    updateAuth({
      id: '',
      username: '',
      role: 0
    });
    router.push('/');
    showToast(0, 'Logout successful')
  }

  return (
    <nav className="bg-black p-4 font-poppins flex items-center justify-between text-white text-base">
      <Link href="/">
      <div className='flex items-center space-x-2 hover:text-gray-300 mr-2'>
        <div className='flex items-center justify-center'>
          <Image src="/images/logo-dormihub.svg" width={30} height={20} alt="Logo DormiHub"/>
        </div>
        <div>
          {auth.role !== 2 ? 'DormiHub' : 'DormiHub Admin'}
        </div>
      </div>
      </Link>
      <div className='flex'>

      {
        auth.role !== 2 ? (
          menus.map((menu, i) => {
            return (
              <div className='ml-4 mr-4' key={i}>
                <div className="hover:text-gray-300 cursor-pointer">
                  <Link href={menu.url}>
                    <div>{menu.page}</div>
                  </Link>
                </div>
              </div>
            )
          })
        ) : (
          null
        )
      }

      {
        auth.role === 0 ? (
          <div className='ml-4 mr-4'>
            <div className="hover:text-gray-300 cursor-pointer">
              <Link href="/login">
                <div>Login</div>
              </Link>
            </div>
          </div>
        ) : (
          <div className='ml-4 mr-4'>
            <div className="hover:text-gray-300 cursor-pointer" onClick={handleLogout}>
              <span>Logout</span>
            </div>
          </div>
        )
      }
      </div>
    </nav>
  );
};

export default Navbar;
