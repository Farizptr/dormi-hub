'use client'

import { useState } from 'react'
import { useRouter } from "next/navigation";
import axios from 'axios'

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
    <div className='flex justify-center items-center w-full min-h-screen bg-cover bg-center bg-[url("/images/login-background.png")]'>
      <div className='bg-white rounded-[20px] w-[300px] h-[450px] p-4 shadow-xl'>
        <div className='flex justify-center items-center'>
          Login
        </div>
        <div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-1">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleLoginData}
            value={loginData.username}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleLoginData}
            value={loginData.password}
            required
          />
        </div>
        <div className="text-center">
          <button
            className="w-[200px] bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none "
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
        
      </div>
    </div>
  )
}
