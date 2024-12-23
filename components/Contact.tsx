import { Input } from './ui/input'
import { Label } from './ui/label'


const Contact = () => {
  return (
    <div>
    <h3 className="uppercase text-[1.65rem] py-6">Contact information</h3>
     <div className='grid grid-cols-2 gap-x-4 pb-2'>
         <div>
             <Label htmlFor='name' className='text-sm text-slate-400'>Name</Label>
         <Input  className='h-5 border-t-0 border-x-0 shadow-none border-black rounded-none px-1 focus-visible:ring-0'/>
         </div>
         <div className='flex flex-row gap-x-4'>
        <div>
        <Label htmlFor='surname' className='text-sm text-slate-400'>Surname*</Label>
        <Input className='h-5 border-t-0 border-x-0 shadow-none border-black rounded-none px-1 focus-visible:ring-0'/>
        </div>
        <div>
           <Label htmlFor='city' className='text-sm text-slate-400'>City*</Label>
        <Input  className='h-5 border-t-0 border-x-0 shadow-none border-black rounded-none px-1 focus-visible:ring-0'/>
        </div>
         </div>
     </div>
     <div className='grid grid-cols-2 gap-x-4'>
    <div>
    <Label htmlFor='phone-number' className='text-sm text-slate-400'>Phone Number*</Label>
    <Input className='h-5 border-t-0 border-x-0 shadow-none border-black rounded-none px-1 focus-visible:ring-0'/>
    </div>
      <div>
         <Label htmlFor='email' className='text-sm text-slate-400'>Email</Label>
      <Input type='email' className='h-5 border-t-0 border-x-0 shadow-none border-black rounded-none px-1 focus-visible:ring-0'/>
      </div>
     </div>
    </div>
  )
}

export default Contact
