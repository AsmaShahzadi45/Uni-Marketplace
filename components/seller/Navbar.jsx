import React from 'react'
import Image from 'next/image'
import { useAppContext } from '@/context/AppContext'

const Navbar = () => {

  const { router } = useAppContext()

  return (
    <div className='flex items-center px-4 md:px-8 py-3 justify-between border-b'>
      <h1 onClick={() => router.push('/')} className='w-28 lg:w-32 cursor-pointer'>
        <div className="flex ml-8 cursor-pointer items-center justify-center gap-2">
          <span className="text-2xl font-bold text-orange-600">UM</span>
          <h1 className="text-xl font-medium text-gray-900 dark:text-gray-400 transition-colors">
            Marketplace
          </h1>
        </div>
      </h1>
      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar