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
         <div className='p-4 font-poppins'>
            <div className='w-full font-extrabold bg-cover bg-center bg-[url("/images/home-text-sample.png")] py-16 text-center text-2xl mb-3'>
               Welcome to the next generation of dormitory living.<br />
               Elevate your stay, amplify your experience.
            </div>

            <div className='grid grid-cols-3 gap-4 text-justify'>
                <div className='w-fit flex flex-col items-center '>
                  <Image src="/images/money-bag.svg" alt="logo" width={50} height={20}/>
                  <p className=' text-sm mt-2'>
                  Discover a smart living experience without breaking the bank. Our smart dormitory offers budget-friendly accommodation, ensuring that you can enjoy the benefits of cutting-edge technology and convenience without compromising your budget.
                  </p>
                </div>

                <div className='w-fit flex flex-col items-center'>
                  <Image src="/images/location.svg" alt="logo" width={50} height={20}/>
                  <p className=' text-sm mt-2'>
                  Nestled in a prime location, our smart dormitory provides you with easy access to key destinations such as universities, public transportation, and essential amenities. Experience the convenience of a strategic location that complements your academic journey.
                  </p>
                </div>

                <div className='w-fit flex flex-col items-center'>
                  <Image src="/images/emoji.svg" alt="logo" width={45} height={20}/>
                  <p className=' text-sm mt-2'>
                  Step into a world where comfort meets innovation. Our smart dormitory is designed with your well-being in mind, offering cozy living spaces equipped with modern conveniences. Relax in a comfortable environment that fosters both relaxation and productivity.
                  </p>
                </div>
                
                <div className='w-fit flex flex-col items-center'>
                  <Image src="/images/bedroom.svg" alt="logo" width={50} height={20}/>
                  <p className=' text-sm mt-2'>
                  Say goodbye to the hassle of moving furniture. Our smart dormitory provides fully furnished spaces, ensuring that you can focus on what matters most—your studies and personal growth. Enjoy a hassle-free living experience with all the essentials already in place.
                  </p>
                </div>

                <div className='w-fit flex flex-col items-center'>
                  <Image src="/images/order.svg" alt="logo" width={50} height={20}/>
                  <p className=' text-sm mt-2'>
                  Experience worry-free living with our all-inclusive billing system. Forget the hassle of managing multiple bills; we've got you covered. From utilities to internet, everything is included in one transparent package, allowing you to budget efficiently and enjoy a stress-free stay.
                  </p>
                </div>

                <div className='w-fit flex flex-col items-center'>
                  <Image src="/images/discount.svg" alt="logo" width={50} height={20}/>
                  <p className=' text-sm mt-2'>
                  Savor the taste of convenience with exclusive discounts at our on-site cafeteria. As a resident of our smart dormitory, you enjoy special privileges, including discounts on delicious meals. Enhance your dining experience and make the most of your time without breaking the bank.
                  </p>
                </div>
            </div>
         </div>
      </div>
   );
}
