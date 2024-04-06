import React from 'react'

const Button = () => {
  return (
    <div className='flex flex-col items-center'>
      <button className='bg-gradient-to-r from-pink-400 to-amber-200 rounded-md font-bold px-20 py-6 text-2xl md:text-lg md:px-14 md:py-4'>
        Get Started for Free
      </button>
      <div className="mt-3 flex flex-col items-center">
        <div>
          <span className="md:text-sm text-2xl mr-1 font-semibold text-[#e37d9b]">4,961</span>
          <span className="mr-1 md:text-sm text-2xl">video professionals</span>
        </div>
        <span className="opacity-50 text-xl md:text-sm">joined Boords in the last 7 days</span>
      </div>
    </div>
  )
}

export default Button