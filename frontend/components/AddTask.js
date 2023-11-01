import { Plus } from 'lucide-react'
import React from 'react'

const AddTask = () => {
  return (
    <div className='h-16 w-16 bg-customOrange rounded-full flex items-center justify-center fixed right-4 bottom-5 md:hidden'>
        <Plus size={32}/>
    </div>
  )
}

export default AddTask