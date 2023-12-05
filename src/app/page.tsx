import Image from 'next/image'
import Navbar from '@/components/Navbar'
export default function Home() {
  return (
    <main className='bg-white h-screen text-black font-poppins'>
      <Navbar/>
      <div className="container mx-auto p-2 flex justify-center">
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className=''>
              <Image src={`/images/bed-${index}.png`} alt="gambar dormitory" width={200} height={375}/>
            </div>
          ))}
        </div>
      </div>
      <div className='flex pl-2 pt-2 items-center'>
        <div className='flex justify-center items-center mr-1'>
          <Image src="/images/address.svg" alt="gambar address" width={20} height={20}/>
        </div>
        <div className=' w-28 flex justify-between mr-2'>
          <div>
            Address
          </div>
          <div>
            :
          </div>
        </div>
        <div>Hogwarts University Dormitory</div>
      </div>

      <div className='flex pl-2 items-center'>
        <div className='flex justify-center items-center mr-1'>
          <Image src="/images/bills.svg" alt="gambar address" width={20} height={20}/>
        </div>
        <div className='w-28 flex justify-between mr-2'>
          <div>
            Bills Included
          </div>
          <div>
            :
          </div>
        </div>
        <div>Wifi, Water Electricity, Gas</div>
      </div>

      <div className='flex pl-2 items-center'>
        <div className='flex justify-center items-center mr-1'>
          <Image src="/images/cube.svg" alt="gambar address" width={20} height={20}/>
        </div>
        <div className='w-28 flex justify-between mr-2'>
          <div>
            Our Facilities
          </div>
          <div>
            :
          </div>
        </div>
        <div className='flex items-center'>
            <Image src="/images/couch.svg" alt="Gambar" width={30} height={20} className='mr-2'/>
            <Image src="/images/social.svg" alt="Gambar" width={20} height={20} className='mr-2'/>
            <Image src="/images/washing-machine.svg" alt="Gambar" width={15} height={20} className='mr-2'/>
            <Image src="/images/wifi.svg" alt="Gambar" width={25} height={20} className='mr-2'/>
            <Image src="/images/kitchen.svg" alt="Gambar" width={20} height={20} className='mr-2'/>
            <Image src="/images/shower.svg" alt="Gambar" width={20} height={20}/>
            

        </div>
      </div>
    </main>
  )
}
