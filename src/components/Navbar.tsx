'use client'

import { useState } from 'react';
import useAuth from '@hooks/useAuth';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const { auth } = useAuth();

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
            <div className="hover:text-gray-300 cursor-pointer">
              <Link href="/">
                <div>Logout</div>
              </Link>
            </div>
            </div>
        )
      }
      </div>
    </nav>
  );
};

export default Navbar;
