import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = () => {
    return (
        <div className="flex items-center justify-center mb-20">
            <div className="flex bg-[#f6f6f0] p-4 xl:w-2/6 rounded-full">
                <div className="flex gap-3 items-center mx-auto">
                    <div className='text-yellow-500 text-sm'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <span className='text-sm font-medium'>
                        Rated 4.9/5 by video professionals
                    </span>
                    <div className="flex items-center justify-center">
                        <div className="relative -ml-2 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1711699487129-3d3a3aa58b71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
                                alt="Profile"
                                className="w-8 h-8 rounded-full object-cover z-10 border-2 border-gray-100"
                            />
                        </div>
                        <div className="relative -ml-2 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1711969376633-82c7b29614a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
                                alt="Profile"
                                className="w-8 h-8 rounded-full object-cover z-10 border-2 border-gray-100"
                            />
                        </div>
                        <div className="relative -ml-2 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1711322741796-351c148ab1b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
                                alt="Profile"
                                className="w-8 h-8 rounded-full object-cover z-10 border-2 border-gray-100"
                            />
                        </div>
                        <div className="relative -ml-2 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1565799556918-0e31a1757d13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
                                alt="Profile"
                                className="w-8 h-8 rounded-full object-cover z-10 border-2 border-gray-100"
                            />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#e37d9b] flex items-center justify-center z-10 -ml-2 border-2 border-gray-100">
                            <span className="text-white font-bold">+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rating