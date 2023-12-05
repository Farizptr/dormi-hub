'use client'

import { useState } from 'react'
import { useRouter } from "next/navigation";
import axios from 'axios'

interface BookDataType {
    full_name: string;
    phone: string;
    email: string;
    student_id: string;
    check_in: string;
  };



export default function Home() {
    const router = useRouter()

    const [bookData, setBookData] = useState<BookDataType>({
        full_name: '',
        phone: '',
        email: '',
        student_id: '',
        check_in: '',
    });

    const handleBookData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBookData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        console.log(bookData)
      };

    const [idCardData,setIdCardData] = useState<File>()
    const [studentCardData,setStudentCardData] =useState<File>()

    const handleIdCard = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputElement = e.target;
    
        if (inputElement.files && inputElement.files.length > 0) {
            // Mengambil objek file pertama dari array files
            const file = inputElement.files[0];
            setIdCardData(file);
    
            console.log("Nama File:", file.name);
            console.log("Tipe File:", file.type);
            console.log("Ukuran File:", file.size, "bytes");
        } else {
            console.log("Tidak ada file yang dipilih");
        }
      };

      const handleStudentCard = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputElement = e.target;
    
        if (inputElement.files && inputElement.files.length > 0) {
            // Mengambil objek file pertama dari array files
            const file = inputElement.files[0];
            setStudentCardData(file);
    
            console.log("Nama File:", file.name);
            console.log("Tipe File:", file.type);
            console.log("Ukuran File:", file.size, "bytes");
        } else {
            console.log("Tidak ada file yang dipilih");
        }
      };

      const handleSubmit = async () => {
        try {
          const response = await axios.post('http://localhost:3000/api/book', {
            full_name: bookData.full_name,
            phone: bookData.phone,
            email: bookData.email,
            student_id: bookData.student_id,
            check_in: bookData.check_in,
            student_card: studentCardData,
            id_card : idCardData,
          }, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
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
    

      



   return(
    <div className='flex justify-center items-center w-full min-h-screen bg-cover bg-center bg-[url("/images/login-background.png")]'>
      <div className='bg-white rounded-[20px] w-[300px] h-[450px] p-4 shadow-xl'>
        <div className='flex justify-center items-center'>
          Login
        </div>
        <div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="username"
            name="full_name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleBookData}
            value={bookData.full_name}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="password"
            id="password"
            name="phone"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleBookData}
            value={bookData.phone}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="text"
            id="username"
            name="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleBookData}
            value={bookData.email}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-1">
            Student ID
          </label>
          <input
            type="text"
            id="username"
            name="student_id"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleBookData}
            value={bookData.student_id}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-1">
            Proposed Check-In Date
          </label>
          <input
            type="text"
            id="username"
            name="check_in"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleBookData}
            value={bookData.check_in}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-1">
            Student Card
          </label>
          <input
            type="file"
            id="username"
            name="student_card"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            accept=".pdf, .png, .jpg, .jpeg"
            onChange={handleStudentCard}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-1">
            Id Card
          </label>
          <input
            type="file"
            id="username"
            name="id_card"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            accept=".pdf, .png, .jpg, .jpeg"
            onChange={handleIdCard}
            required
          />
        </div>
        <div className="text-center">
          <button
            className="w-[200px] bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none "
            onClick={handleSubmit}
          >
            Book Now!
          </button>
        </div>
      </div>
        
      </div>
    </div>
   ) 
}