import JobCart from '@/components/common/JobCart'
import Link from 'next/link'
import React from 'react'

const FindJob = () => {
  return (
    <div className='pb-28'>
      <h1 className=' bg-blue-100 text-3xl text-center py-10 font-medium'>
        Vind een baan
      </h1>
      {/* Job Cart */}
      <div className='max-w-6xl mx-auto my-16'>
        <div className='grid  md:grid-cols-3 px-10 md:px-0 gap-10'>
          <JobCart />
          <JobCart />
          <JobCart />
        </div>
      </div>

      {/*  */}
      <div className='text-center text-blue-600 '>
        <Link Link href={'/job/show-all-jobs'}>
          <button className='hover:underline underline-offset-4 duration-300 px-10 py-5'>
            Laat meer zien
          </button>
        </Link>
      </div>
    </div>
  )
}

export default FindJob
