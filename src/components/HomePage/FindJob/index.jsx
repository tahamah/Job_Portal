import JobCart from '@/components/common/JobCart'
import React from 'react'

const FindJob = () => {
  return (
    <div className='pb-28'>
      <h1 className=' bg-blue-100 text-3xl text-center py-10 font-medium'>
        Find Job
      </h1>
      {/* Job Cart */}
      <div className='max-w-7xl mx-auto my-16'>
        <div className='flex  gap-5 justify-between'>
          <JobCart />
          <JobCart />
          <JobCart />
        </div>
      </div>

      {/*  */}
      <div className='text-center text-blue-600 '>
        <button className='hover:underline underline-offset-4 duration-300 px-10 py-5'>Show More</button>
      </div>
    </div>
  )
}

export default FindJob
