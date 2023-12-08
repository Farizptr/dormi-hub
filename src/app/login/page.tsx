'use client'

import { useState } from 'react'
import { useRouter } from "next/navigation";
import axios from 'axios'
import Image from 'next/image';
import Navbar from '@/components/Navbar';


interface LoginDataType {
  username: string;
  password: string;
};

export default function Home() {
  const router = useRouter()

  const [loginData, setLoginData] = useState<LoginDataType>({
    username: '',
    password: '',
  });

  const handleLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        username: loginData.username,
        password: loginData.password
      });

      if (response.status === 200) {
        // navigate ke home page
        console.log("Success")
        router.push("/home");
      } else {
        console.log("Failed")
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
        <div className=" h-14">
                <div className="fixed w-screen z-[1000]">
                    <Navbar/>
                </div>
        </div>
    <div className='flex justify-center items-center w-full min-h-screen bg-cover bg-center bg-[url("/images/dormitory.png")] font-poppins'>
      <div className='bg-white w-[300px] h-[450px] px-6 pb-6 shadow-xl border-2 border-slate-300'>
        <div className='bg-[#FDFF8F]  h-12 mx-10 flex items-center justify-center mb-6'>
          LOGIN
        </div>
        <div className='flex items-center justify-center '>
          <Image src="/images/geometry.svg" width={100} height={20} alt="logo profile "/>
        </div>
        <div className='mt-10'>
        <div className="mb-4">
          <label htmlFor="username" className="block text-black text-sm font-medium mb-1">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleLoginData}
            value={loginData.username}
            required
            />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-black text-sm font-medium mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border  border-black rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleLoginData}
            value={loginData.password}
            required
            />
        </div>
        <div className="text-center mt-10">
          <button
            className="w-full border-[1.5px] border-black bg-[#FDFF8F] px-4 py-2 rounded-2xl hover:bg-blue-600 focus:outline-none"
            onClick={handleLogin}
            >
            LOGIN
          </button>
        </div>
      </div>
        
      </div>
    </div>
            </div>
  )
}
