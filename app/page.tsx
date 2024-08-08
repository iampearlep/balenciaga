import Image from 'next/image'
import Img1 from '@/public/images/hero-img.webp'
export default function Home() {
  return (
   <main>
   <div className='relative h-screen overflow-hidden'>
   <div className='w-full'>
   <Image src={Img1} width={1943} height={1457} alt='' priority={true} className='w-full h-full object-cover object-top' />
   </div>
<div className=''>
<div className='absolute top-0 inset-0 pt-24 px-[3.75rem] max-w-xl'>
    <h1 className='text-7xl text-white uppercase'>New collection</h1>
    <button className='bg-black text-white w-1/2 text-xl my-14 py-4 rounded-md'>Shop now</button>
   </div>
   <div className='absolute top-0 right-0 pt-[290px]  px-[3.75rem]  flex flex-col gap-y text-white uppercase '>
    <div className='flex flex-row gap-x-6'>
    <h1 className='text-6xl'>23/24</h1>
    <p  className='text-3xl text-right pt-8'>Autumm-winter</p>
    </div>
    <div className='text-3xl text-right '>
    <p>Coats and Jackets</p>
    </div>
   </div>
</div>
   </div>
   </main>
  );
}
