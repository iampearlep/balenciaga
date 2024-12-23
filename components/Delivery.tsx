import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'

const Delivery = () => {
  return (
    <div>
       <h3 className="uppercase text-[1.65rem] py-6">Delivery information</h3>
       <div className='grid grid-cols-2 gap-x-4 pb-2'>
         <div>
             <Label htmlFor='address' className='text-sm text-slate-400'>Address</Label>
         <Input  className='h-5 border-t-0 border-x-0 shadow-none border-black rounded-none px-1 focus-visible:ring-0'/>
         </div>
        <div>
           <Label htmlFor='city' className='text-sm text-slate-400'>City*</Label>
        <Input  className='h-5 border-t-0 border-x-0 shadow-none border-black rounded-none px-1 focus-visible:ring-0'/>
        </div>
     </div>
     <div>
         <Label htmlFor='phone-number' className='text-sm text-slate-400'>Phone Number*</Label>
      <Input className='h-5 border-t-0 border-x-0 shadow-none border-black rounded-none px-1 focus-visible:ring-0'/>
      </div>
    </div>
  )
}

export default Delivery
