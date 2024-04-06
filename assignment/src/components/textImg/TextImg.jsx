import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const TextImg = ({ BtnText, Heading, Para, displayImg, className }) => {
    return (
        <div className="mb-20 mt-24">
            <div className="mx-20">
                <div className="md:grid md:grid-cols-2 space-y-10 group">
                <div className={`leading-[0px] flex items-center xl:px-12 ${className}`}>
                            <div className="relative aspect-w-3 aspect-h-4">
                                <div className="false">
                                    <div>
                                        <img src={displayImg} alt="" className='rounded-2xl' style={{ width: "100%", height: "100%" }} />
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="flex items-center sm:px-12">
                        <div>
                            <div className="w-28 mb-10">
                                <span className="flex items-center justify-center py-2 pr-4 border rounded-md space-x-2 border-black/10 hover:bg-grey">
                                    <span className="-mt-[0.1rem] !group-hover:text-pink">
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className="flex text-xs font-semibold md:text-base whitespace-nowrap">
                                        {BtnText}
                                    </span>
                                </span>
                            </div>
                            <h2 className="w-full mb-5 text-lg font-bold lg:text-xl xl:text-5xl font-display tracking-wide leading-[3rem]">
                                {Heading}
                            </h2>
                            <p className="text-base lg:text-lg leading-loose tracking-widest mb-4">
                                {Para}
                            </p>
                            <div className="mt-8">
                                
                                    <span className="font-semibold underline underline-offset-2 hover:no-underline hover:bg-blue/40 px-1 py-0.5 rounded-md -ml-1 text-xl">
                                        Learn More
                                    </span>
                                    <span className="ml-1 font-semibold">
                                        →
                                    </span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextImg