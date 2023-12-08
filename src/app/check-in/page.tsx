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
        router.push("/");
      } else {
        console.log("Failed")
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
        <Navbar/>
    <div className='flex justify-center items-center w-full min-h-screen bg-cover bg-center bg-[url("/images/login-background.png")] font-poppins'>
      <div className='bg-white w-[300px] h-[450px] p-6 shadow-xl border-2 border-slate-300'>
      
        <div className='flex items-center justify-center '>
          CheckIn
        </div>
        <div className='text-center font-bold text-3xl mt-10'>
            SCAN ME
        </div>
        <div className='flex items-center justify-center'>
            <Image src="/images/barcode.svg" width={150} height={20} alt="logo barcode"/>
        </div>
        <div className='text-center mt-4'>
            STUDENT ID : 18221015
        </div>
        <div className='mt-10'>
        

        <div className="text-center mt-10">
          <button
            className="w-full border-[1.5px] border-black bg-[#FDFF8F] px-4 py-2 rounded-2xl hover:bg-blue-600 focus:outline-none"
            onClick={handleLogin}
          >
            CHECK OUT
          </button>
        </div>
      </div>
        
      </div>
    </div>
    </div>
  )
}
