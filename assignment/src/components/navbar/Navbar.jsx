import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navItems } from './navItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import faTimes for close icon
import mainlogo from '../../assets/mainlogo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <>
            <nav className='flex flex-wrap items-center max-sm:justify-between h-auto m-2 md:m-8 p-3 md:p-7 pl-6 md:pl-12'>
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link to='/' className='font-extrabold text-2xl mr-10'>
                        <img src={mainlogo} alt="" width='80%' />
                    </Link>
                </div>
                <div className="block md:hidden">
                    <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                        {isOpen ? (
                            <FontAwesomeIcon icon={faTimes} />
                        ) : (
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        )}
                    </button>
                </div>
                <div className={`${
                    isOpen ? 'block' : 'hidden'
                } md:flex md:items-center w-full md:w-auto`}>
                    <ul className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 md:justify-start'>
                        {navItems.map((item) => (
                            <li key={item.id} className='font-semibold flex justify-center items-center gap-2'>
                                <Link to={item.path} onClick={() => { closeMenu() }}>
                                    {item.title}
                                </Link>
                                {item.title !== 'Pricing' && <FontAwesomeIcon icon={faAngleDown} />}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
