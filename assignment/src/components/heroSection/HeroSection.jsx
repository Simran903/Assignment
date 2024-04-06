import React from 'react';
import Button from '../Button';
import line from '../../assets/line.png'
import logo from '../../assets/logo.png'
import Features from '../features/Features';
import Message from '../message/Message';
import TextImg from '../textImg/TextImg';
import Footer from '../footer/Footer';
import Pricing from '../pricing/Pricing';
import Resources from '../resources/Resources';
import textimg1 from '../../assets/textimg1.png';
import textimg2 from '../../assets/textimg2.png';


const HeroSection = () => {
    return (
        <div className="w-full">
            <div className="w-full bg-gradient-to-b from-white to-[#ffeacd] h-[140vh]">
                <div className="flex flex-col text-center justify-center">
                    <h1 className="text-5xl md:text-6xl font-bold !leading-[1.1] font-body mt-14">
                        <span className="block whitespace-nowrap">
                            The Shortcut to
                        </span>
                        <span className="inline-block whitespace-nowrap">
                            <span className="relative ">
                                <span className="text-[#e37d9b]">Effective</span>
                                <span className="absolute left-0 right-0 top-[3.75rem] whitespace-nowrap opacity-0 ">
                                    <img src={line} alt="underline" width='100%' />
                                </span>
                            </span>
                            <span> Storyboards</span>
                        </span>
                    </h1>
                    <h2 className="w-[36rem] mx-auto mt-7 mb-7 text-[1.5rem]">
                        Boards is the moder storyboarding tool that helps video professionals create client-ready Storyborads 10x faster
                    </h2>
                    <Button />
                </div>
                <div className="">
                    <div className="pt-20 pb-1">
                        <div className="">
                            <span className="block max-w-full mb-12 text-lg lg:text-xs font-semibold tracking-widest text-center uppercase opacity-50">Boords is trusted by the world's leading video agencies.</span>
                        </div>
                        
                        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 lg:px-40 px-10">
                            {[...Array(8)].map((_, index) => (
                                <div className="m-6 md:m-4 p-0" key={index}>
                                    <img src={logo} alt="" className="w-full" />
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
                <div className="bg-gradient-to-b from-[#ffeacd] to-white">
                    <Message message="”Without Boords storyboarding was the most painful part of the production process, with Boords it's the most painless. Super easy to use, brilliantly collaborative with both our teams and our clients, and&nbsp;speeds up the pre-production process immeasurably." name='Lewis Darby' designation='Founder, Yard B' />
                </div>
                <Features />
                <div className="bg-[#ffeacd]">
                    <Message message="”Our studio runs on Boords. We can quickly draw up ideas, add in a script, receive real-time feedback and rapidly iterate changes. Everything is one place so there’s no need to email files back and forth. It’s really a game changer." name='Kelly Messori' designation='Producer at CatCow' />
                </div>
                <div className="bg-gradient-to-b from-[#ffeacd] to-[#daeef8] h-[25vh]">
                    <Button />
                </div>
                <div className="mt-10">
                    <TextImg BtnText="Iterate" Heading="Fewer Client Curveballs..." Para="Quickly make changes to your storyboards for faster sign-off with animatics, versioning, frame statuses and more. Ensure everyone is on the same page and avoid unexpected (and costly) changes in production." displayImg={textimg1} className='sm:group-odd:order-last xl:gap-20' />
                    <TextImg BtnText="Export" Heading="Move Seamlessly Into Production" Para="Move seamlessly from storyboard to production with multiple export options, including presentation links, customizable PDF, MP4 animatics, and more." displayImg={textimg2} />
                </div>
                <div className="bg-[#ffeacd]">
                    <Message message="”Boords helps us create a consistent look and feel for all our boards, and saves our art directors from wasting time futzing with layouts. It helps us spend time on the creative, not the formatting. It's every creative's dream." name='Hope Morley' designation='COO at Umault' />
                </div>
                <div className="bg-gradient-to-b from-[#ffeacd] to-[#daeef8] h-[25vh]">
                    <Button />
                </div>
                <Resources />
                <Pricing />
                <Footer />
            </div>
        </div>
    );
};

export default HeroSection;