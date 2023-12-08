'use client'

import { useState } from 'react'
import { useRouter } from "next/navigation";
import useToast from '@hooks/useToast';
import axios from 'axios'
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Modal from 'react-modal'

export default function Registration() {
  const[showModal, setShowModal]=useState(false);
  const router = useRouter()
  const showToast = useToast()

  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    student_id: '',
    check_in: '',
    student_card: ''
  });

  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData)
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let fileName = ''
    if (e && e.target && e.target.files && e.target.files[0]) {
      fileName = e.target.files[0].name
    }
    setFormData((prevData) => ({
      ...prevData,
      student_card: fileName
    }))
  }

  const handleRegistration = async () => {
    try {
      const response = await axios.post('https://dormi-gbfdc4gkw-fariz-putras-projects.vercel.app/api/book/', formData);

      if (response.status === 200) {
        showToast(0, 'Registrasi berhasil')
        router.push('/')
      } else {
        showToast(1, 'Registrasi gagal')
      }
      setShowModal(false)
      
    } catch (error) {
      showToast(1, 'Registrasi gagal')
      setShowModal(false)
    }
  };

  return (
    <div>
         <div className=" h-14">
                <div className="fixed w-screen z-[1000]">
                    <Navbar/>
                </div>
        </div>
    <div className='flex justify-center items-center w-full min-h-screen bg-cover bg-center bg-[url("/images/login-background.png")] font-poppins'>
      <div className='bg-white w-[600px] h-[400px] p-6 shadow-xl rounded-md border-2 border-slate-300'>
        <div className=' text-xl font-bold '>
          Registration Form
        </div>
        <form className='text-sm grid grid-cols-2 gap-3 mt-5'>
        <div>
          <label htmlFor="full_name">Nama Lengkap</label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleInputChange}
            value={formData.full_name}
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Nomor Telepon:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full px-3 py-2 border  border-black rounded-md focus:outline-none focus:border-blue-500"

            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border  border-black rounded-md focus:outline-none focus:border-blue-500"

          />
        </div>

        <div>
          <label htmlFor="student_id">ID Mahasiswa</label>
          <input
            type="text"
            id="student_id"
            name="student_id"
            value={formData.student_id}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border  border-black rounded-md focus:outline-none focus:border-blue-500"

          />
        </div>

        <div>
          <label htmlFor="check_in">Tanggal Check-in</label>
          <input
            type="date"
            id="check_in"
            name="check_in"
            value={formData.check_in}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border  border-black rounded-md focus:outline-none focus:border-blue-500"

          />
        </div>

        <div>
          <label htmlFor="file">File</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            accept=".pdf, .png, .jpg, .jpeg"
            className="w-full px-3 py-2 border  border-black rounded-md focus:outline-none focus:border-blue-500 h-[40px]"
          />
        </div>
      </form>

        <div className="text-center mt-10">
          <button
            className="w-full border-[1.5px] border-black bg-[#FDFF8F] px-4 py-2 rounded-2xl hover:bg-blue-600 focus:outline-none"
            onClick={()=>setShowModal(true)}
          >
            Submit
          </button>
        </div>
        <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        //ukurannya disesuaikan dengan ukuran konten
        contentLabel="Peringatan"
        className="text-black h-full w-full flex justify-center items-center"
      >
        <div className=" bg-white rounded-lg border-2 border-black">
          <h2 className=" text-base text-center font-semibold mb-4 border-b-2 border-black p-2">Confirmation : Registration Data Sent</h2>
          <div className='p-2 text-justify w-[500px] text-sm '>Success! Your data has been successfully submitted. Please check your email regularly for updates on your dormitory registration application. Thank you for choosing our dormitory. If you have any further questions or concerns, feel free to reach out to our support team. Have a great day!</div>
          <div className="flex justify-center items-center">
            <button
              className="px-4 py-2  rounded-md hover:bg-opacity-80"
              onClick={handleRegistration}
            >
              <Image src="/images/ok.svg" alt="ok" width={50} height={20}/>
            </button>
          </div>
        </div>
      </Modal>
        
      </div>
    </div>
    </div>
    // <div>
    //   <h1>Registrasi</h1>
      
    // </div>
  );
}

// interface BookDataType {
//     full_name: string;
//     phone: string;
//     email: string;
//     student_id: string;
//     check_in: string;
//   };



// export default function Home() {
//     const router = useRouter()

    
//     const [bookData, setBookData] = useState<BookDataType>({
//         full_name: '',
//         phone: '',
//         email: '',
//         student_id: '',
//         check_in: '',
//     });

//     const handleBookData = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setBookData((prevData) => ({
//           ...prevData,
//           [name]: value,
//         }));
//         console.log(bookData)
//       };

//     const [idCardData,setIdCardData] = useState<File>()
//     const [studentCardData,setStudentCardData] =useState<File>()

//     const handleIdCard = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const inputElement = e.target;
    
//         if (inputElement.files && inputElement.files.length > 0) {
//             // Mengambil objek file pertama dari array files
//             const file = inputElement.files[0];
//             setIdCardData(file);
    
//             console.log("Nama File:", file.name);
//             console.log("Tipe File:", file.type);
//             console.log("Ukuran File:", file.size, "bytes");
//         } else {
//             console.log("Tidak ada file yang dipilih");
//         }
//       };

//       const handleStudentCard = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const inputElement = e.target;
    
//         if (inputElement.files && inputElement.files.length > 0) {
//             // Mengambil objek file pertama dari array files
//             const file = inputElement.files[0];
//             setStudentCardData(file);
    
//             console.log("Nama File:", file.name);
//             console.log("Tipe File:", file.type);
//             console.log("Ukuran File:", file.size, "bytes");
//         } else {
//             console.log("Tidak ada file yang dipilih");
//         }
//       };

//       const handleSubmit = async () => {
//         try {
//           const response = await axios.post('http://localhost:3000/api/book', {
//             full_name: bookData.full_name,
//             phone: bookData.phone,
//             email: bookData.email,
//             student_id: bookData.student_id,
//             check_in: bookData.check_in,
//             student_card: studentCardData,
//             id_card : idCardData,
//           }, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             }
//           });
    
//           if (response.status === 200) {
//             // navigate ke home page
//             console.log("Success")
//             router.push("/");
//           } else {
//             console.log("Failed")
//           }
    
//         } catch (error) {
//           console.log(error)
//         }
//       }
    
      
      



//    return(
//     <div>
//       <Navbar/>
//       <div>
//       <h1>Registrasi</h1>
//       <form>
//         <div>
//           <label htmlFor="full_name">Nama Lengkap:</label>
//           <input
//             type="text"
//             id="full_name"
//             name="full_name"
//             value={formData.full_name}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="phone">Nomor Telepon:</label>
//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="student_id">ID Mahasiswa:</label>
//           <input
//             type="text"
//             id="student_id"
//             name="student_id"
//             value={formData.student_id}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="check_in">Tanggal Check-in:</label>
//           <input
//             type="date"
//             id="check_in"
//             name="check_in"
//             value={formData.check_in}
//             onChange={handleInputChange}
//           />
//         </div>

//         <button type="button" onClick={handleRegistration}>
//           Daftar
//         </button>
//       </form>
//     </div>


//     </div>
//     // <div className='flex justify-center items-center w-full min-h-screen bg-cover bg-center bg-[url("/images/login-background.png")]'>
//     //   <div className='bg-white rounded-[20px] w-[300px] h-[450px] p-4 shadow-xl'>
//     //     <div className='flex justify-center items-center'>
//     //       Login
//     //     </div>
//     //     <div>
//     //     <div className="mb-4">
//     //       <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-1">
//     //         Full Name
//     //       </label>
//     //       <input
//     //         type="text"
//     //         id="username"
//     //         name="full_name"
//     //         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//     //         onChange={handleBookData}
//     //         value={bookData.full_name}
//     //         required
//     //       />
//     //     </div>
//     //     <div className="mb-4">
//     //       <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-1">
//     //         Phone Number
//     //       </label>
//     //       <input
//     //         type="password"
//     //         id="password"
//     //         name="phone"
//     //         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//     //         onChange={handleBookData}
//     //         value={bookData.phone}
//     //         required
//     //       />
//     //     </div>

//     //     <div className="mb-4">
//     //       <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-1">
//     //         Email
//     //       </label>
//     //       <input
//     //         type="text"
//     //         id="username"
//     //         name="email"
//     //         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//     //         onChange={handleBookData}
//     //         value={bookData.email}
//     //         required
//     //       />
//     //     </div>

//     //     <div className="mb-4">
//     //       <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-1">
//     //         Student ID
//     //       </label>
//     //       <input
//     //         type="text"
//     //         id="username"
//     //         name="student_id"
//     //         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//     //         onChange={handleBookData}
//     //         value={bookData.student_id}
//     //         required
//     //       />
//     //     </div>

//     //     <div className="mb-4">
//     //       <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-1">
//     //         Proposed Check-In Date
//     //       </label>
//     //       <input
//     //         type="text"
//     //         id="username"
//     //         name="check_in"
//     //         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//     //         onChange={handleBookData}
//     //         value={bookData.check_in}
//     //         required
//     //       />
//     //     </div>

//     //     <div className="mb-4">
//     //       <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-1">
//     //         Student Card
//     //       </label>
//     //       <input
//     //         type="file"
//     //         id="username"
//     //         name="student_card"
//     //         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//     //         accept=".pdf, .png, .jpg, .jpeg"
//     //         onChange={handleStudentCard}
//     //         required
//     //       />
//     //     </div>
//     //     <div className="mb-4">
//     //       <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-1">
//     //         Id Card
//     //       </label>
//     //       <input
//     //         type="file"
//     //         id="username"
//     //         name="id_card"
//     //         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//     //         accept=".pdf, .png, .jpg, .jpeg"
//     //         onChange={handleIdCard}
//     //         required
//     //       />
//     //     </div>
//     //     <div className="text-center">
//     //       <button
//     //         className="w-[200px] bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none "
//     //         onClick={handleSubmit}
//     //       >
//     //         Book Now!
//     //       </button>
//     //     </div>
//     //   </div>
        
//     //   </div>
//     // </div>
//    )
// }