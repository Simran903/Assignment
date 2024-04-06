import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#121212] text-white'>
      <div className="w-full p-10 pl-20 md:grid md:grid-cols-5 md:gap-12 pb-28 flex flex-col">
        <div className="w-full flex flex-col space-y-6 max-w-[14rem]">
          <span>
            <h1 className='text-3xl font-extrabold'> BOORDS </h1>
          </span>
          <div className="pr-10 mb-8 opacity-50 text-normal">
            The Shortcut to Effective Storyboards
          </div>
          <button
            className="px-5 rounded-md text-center pt-1.5 pb-1.5 font-semibold border-2 lg:border-3 block sm:inline-block transition-all text-black bg-white border-white w-36"
            href="#"
          >
            Try For Free
          </button>
        </div>
        <div className="flex flex-col">
          <h2 className='text-2xl font-bold md:mb-6 md:mt-0 mb-3 mt-10'>Features</h2>
          <ul className='leading-7 text-md cursor-pointer'>
            <li className='hover:underline'>Create</li>
            <li className='hover:underline'>Collaborate</li>
            <li className='hover:underline'>Iterate</li>
            <li className='hover:underline'>Export</li>
          </ul>
        </div>
        <div className="">
          <h2 className='text-2xl font-bold md:mb-6 md:mt-0 mb-3 mt-10'>AI Tools</h2>
          <ul className='leading-7 text-md cursor-pointer'>
            <li className='hover:underline'>AI Storyboard Generator</li>
            <li className='hover:underline'>AI Script Generator</li>
            <li className='hover:underline'>AI Character Generator</li>
            <li className='hover:underline'>AI Image Variations</li>
          </ul>
        </div>
        <div className="">
          <h2 className='text-2xl font-bold md:mb-6 md:mt-0 mb-3 mt-10'>Templates</h2>
          <ul className='leading-7 text-md cursor-pointer'>
            <li className='hover:underline'>Storyboards</li>
            <li className='hover:underline'>Shot Lists</li>
            <li className='hover:underline'>Call Sheets</li>
            <li className='hover:underline'>Filmmaking</li>
          </ul>
        </div>
        <div className="">
          <h2 className='text-2xl font-bold md:mb-6 md:mt-0 mb-3 mt-10'>Company & Legal</h2>
          <ul className='leading-7 text-md cursor-pointer'>
            <div className="flex gap-2 items-center">
            <li className='hover:underline'>Affilitates</li>
            <div  className="border-[#e37d9b] border text-[#e37d9b] rounded-full text-xs whitespace-nowrap md:text-sm pb-0 px-2 inline-block ">New</div>
            </div>
            <li className='hover:underline'>Climate Contributions</li>
            <li className='hover:underline'>Help Center</li>
            <li className='hover:underline'>Privacy</li>
            <li className='hover:underline'>Terms of Use</li>
            <li className='hover:underline'>Security</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer