'use client'
import Image from 'next/image';

import Navbar from '@/components/Navbar';

export default function Home() {
   return (
      <div>
         <div className=" h-14">
                <div className="fixed w-screen z-[1000]">
                    <Navbar/>
                </div>
        </div>
         <div className='grid grid-cols-2 gap-4 p-5 font-poppins'>
            <div className='border-2 border-black rounded-lg h-screen'>
                <h1 className=' text-center text-xl py-3'>New Registration Submission</h1>

                <div className='bg-[#FDFF8F] rounded-3xl shadow-md mx-10 mt-5 p-4 flex justify-between'>
                    <div>
                        <div>
                            STUDENT ID: 18221015
                        </div>
                        <div className='flex'>
                            <div>
                                Download File:
                            </div>
                            <div className='ml-2'>
                                <Image src="/images/file.svg" alt="logo file" width={40} height={20}/>
                            </div>
                        </div>
                    </div>
                    <div className='flex  items-center'>
                        <div className='mr-10'>
                            <Image src="/images/x.svg" alt="logo file" width={35} height={20}/>
                        </div>
                        <div>
                            <Image src="/images/checklist.svg" alt="logo file" width={35} height={20}/>

                        </div>
                    </div>


                </div>

            </div>
            <div className='border-2 border-black rounded-lg'>
                <h1 className=' text-center text-xl py-3'>Check  In Request</h1>
                <div className='bg-[#FDFF8F] rounded-3xl shadow-md mx-10 mt-5 p-4 flex justify-between'>
                    <div>
                        <div>
                            STUDENT ID: 18221015
                        </div>
                        <div className='flex'>
                            <div>
                                Barcode Scanner:
                            </div>
                            <div className='ml-2'>
                                <Image src="/images/qr.svg" alt="logo file" width={50} height={20}/>
                            </div>
                        </div>
                    </div>
                    <div className='flex  items-center'>
                        <div className='mr-10'>
                            <Image src="/images/x.svg" alt="logo file" width={35} height={20}/>
                        </div>
                        <div>
                            <Image src="/images/checklist.svg" alt="logo file" width={35} height={20}/>

                        </div>
                    </div>


                </div>
                
            </div>
         </div>
      </div>
   );
}
