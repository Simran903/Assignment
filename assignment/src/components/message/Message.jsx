import React from 'react'

const Message = ({ message, name, designation }) => {
  return (
    <div className="flex items-center justify-center h-[50vh]  ">
      <div className="w-full px-7 max-w-screen-2xl">
        <div className="md:text-center">
          <div className="flex justify-center mb-8">
            <span className="max-w-2xl text-xl md:text-lg tracking-widest leading-8">
              {message}
            </span>
          </div>
          <div className="flex ml-3 md:justify-center items-center space-x-2">
            <div className='space-x-5'>
              <div className="w-20 h-20 md:w-12 md:h-12 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1708923878558-6ab2c906e099?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
            <div className="-mt-1 text-lg md:text-xs md:mt-0 md:flex md:items-center md:space-x-2 space-y-1 md:space-y-0">
              <div className="font-semibold">{name}</div>
              <div className="opacity-40">{designation}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message