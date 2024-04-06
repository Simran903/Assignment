import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faWrench, faStar } from '@fortawesome/free-solid-svg-icons';
import TextImg from '../textImg/TextImg';
import Rating from '../rating/Rating';
import buildcharacters from '../../assets/buildcharacters.png'
import planvideo from '../../assets/planvideo.png'
import createvariations from '../../assets/createvariations.png'
import textimg3 from '../../assets/textimg3.png';
import textimg4 from '../../assets/textimg4.png';


const Features = () => {
    return (
        <div className="">
            <div className="py-0.5 bg-gradient-to-b from-white to-[#daeef8]">
                <div className="w-full mt-12 md:mt-24"><div className="flex justify-center">
                    <div className="w-full px-7 md:px-20 max-w-screen-2xl">
                        <div className="flex justify-center ">
                            <div className="w-full  md:text-center max-w-3xl ">
                                <h2 className="text-4xl md:text-5xl font-bold font-display">
                                    Creativity-Enabling AI Tools
                                </h2>
                                <div className="mt-4 text-xl md:text-lg leading-loose max-w-3xl ">Use AI to enhance–not replace–your creative process. Dramatically increase your storyboarding capacity so you can handle more projects and create your best work.</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="bg-[#daeef8]">
                <div className="flex grid-cols-1 gap-8 p-20 pb-0 max-lg:flex-col max-lg:flex-start max-lg:p-12">
                    <div className="group cursor-pointer">
                        <span className=''>
                            <img src={buildcharacters} alt="img1" className='rounded-xl max-lg:w-full max-lg:h-full object-cover'/>
                        </span>
                        <FontAwesomeIcon icon={faSliders} className='text-blue-400 mt-5' />
                        <div className="text-left">
                            <div className="mb-5 text-blue"></div>
                            <div className="mb-4 lg:mb-6 ">
                                <h2 className="flex-auto w-full font-semibold text-2xl group-hover:underline underline-offset-2">
                                    Build Characters
                                </h2>
                            </div>
                            <p className="leading-7 mb-4 text-xl md:text-lg">Create custom AI-generated characters to use across multiple storyboard frames.
                            </p>
                        </div>
                    </div>
                    <div className="group cursor-pointer">
                        <span className=''>
                            <img src={planvideo} alt="img1" className='rounded-xl max-lg:w-full max-lg:h-full object-cover' />
                        </span>
                        <FontAwesomeIcon icon={faStar} className='text-blue-400 mt-5' />
                        <div className="text-left">
                            <div className="mb-5 text-blue"></div>
                            <div className="mb-4 lg:mb-6 ">
                                <h2 className="flex-auto w-full font-semibold text-2xl group-hover:underline underline-offset-2">
                                    Plan Your Video
                                </h2>
                            </div>
                            <p className="leading-7 mb-4 text-xl md:text-lg">Describe storyboard scenes to quickly generate expressive, character-driven images.
                            </p>
                        </div>
                    </div>
                    <div className="group cursor-pointer">
                        <span className=''>
                            <img src={createvariations} alt="img1" className='rounded-xl max-lg:w-full max-lg:h-full object-cover'/>
                            
                        </span>
                        <FontAwesomeIcon icon={faWrench} className='text-blue-400 mt-5' />
                        <div className="text-left">
                            <div className="mb-5 text-blue"></div>
                            <div className="mb-4 lg:mb-6 ">
                                <h2 className="flex-auto w-full font-semibold text-2xl group-hover:underline underline-offset-2">
                                    Create Variations
                                </h2>
                            </div>
                            <p className="leading-7 mb-4 text-xl md:text-lg">
                                Create subtle variations of existing images to build out storyboard sequences fast.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-40 bg-gradient-to-b from-[#daeef8] to-white"></div>
            <div className="flex justify-center">
                <div className="w-full px-7 md:px-20 max-w-screen-2xl">
                    <div className="flex justify-center">
                        <div className="w-full  md:text-center max-w-3xl ">
                            <h2 className="text-5xl font-bold font-display">
                                10x Your Pre-Production Pipeline
                            </h2>
                            <div className="mt-6 md:text-center tracking-wider max-w-3xl  text-xl md:text-lg leading-loose">
                                Boords helps you achieve a fast, hassle-free pre-production process so you can spend more time being creative. You'll wonder how you lived without it...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TextImg BtnText="Create" Heading="Professional Power..." Para="Boords makes it easy for anyone in your organization to create client-ready storyboards with a simple drag-and-drop interface, image &amp; script generation, and a vast stock illustration and photo library." displayImg={textimg3} className='sm:group-odd:order-last xl:gap-20' />
            <TextImg BtnText="Create" Heading="Professional Power..." Para="Boords makes it easy for anyone in your organization to create client-ready storyboards with a simple drag-and-drop interface, image &amp; script generation, and a vast stock illustration and photo library." displayImg={textimg4} />
            <Rating />
        </div>
    )
}


export default Features