import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full mt-10'>
      <div className='h-full flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-base'>2 feb 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make youtube video</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut at accusamus perferendis adipisci suscipit.
        </p>
      </div>
      <div className='h-full flex-shrink-0 w-[300px] p-5 bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-base'>2 feb 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make youtube video</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut at accusamus perferendis adipisci suscipit.
        </p>
      </div>
      <div className='h-full flex-shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-base'>2 feb 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make youtube video</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut at accusamus perferendis adipisci suscipit.
        </p>
      </div>
      <div className='h-full flex-shrink-0 w-[300px] p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-base'>2 feb 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make youtube video</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut at accusamus perferendis adipisci suscipit.
        </p>
      </div>
      
      
    </div>
  )
}

export default TaskList
