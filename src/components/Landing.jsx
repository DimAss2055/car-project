import React from 'react';
import supra from "../images/supra.jpg";
import landcruiser from "../images/landcruiser.jpg";
import hilux from "../images/hilux.jpg";
import arrow from "../images/arrow-right.png";
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


const Lannding = () => {


    return(
        <>
                <div className='flex h-svh text-zinc-50 Suwannaphum'>
                    <aside className='w-3/5 bg-zinc-500 h-svh'>
                        <NavBar/>
                        <div className='px-40 font-black text-center text-8xl pt-36'>
                            2020<br/>MODERN<br/>CARS
                        </div>
                        <div className='flex items-center justify-center pt-10 gap-x-6'>
                            <ChevronLeft className='cursor-pointer size-20'/>
                            <div>
                                <div className='pt-8 text-5xl'>
                                    TOYOTA HILUX
                                </div>
                                <div className='pt-8 text-2xl flex-auto w-fit text</div></div>'>
                                    The strongest pickup in the world, since 1968.
                                </div>
                            </div>
                            <ChevronRight className='cursor-pointer size-20'/>
                        </div>
                        <div className='flex justify-center gap-3 px-40 text-9xl text-slate-400'>
                            <span className='text-slate-100'>.</span>
                            <span className=''>.</span>
                            <span className=''>.</span>
                            <span className=''>.</span>
                        </div>
                        <button className='flex justify-center px-10 py-4 mx-auto mt-16 border hover:bg-zinc-400'>
                            <div className='pt-1 pr-3 font-bold align-baseline text-l'>
                                VIEV MORE
                            </div>
                            <img src={arrow} alt=""/>
                        </button>
                    </aside>
                    <div className='relative w-full'>                        
                        {/*
                                <img src={supra} className='absolute object-cover w-full h-full bg-no-repeat -z-10'/>
                                <div>TOYOTA GR SUPRA</div>
                                <img src={landcruiser} className='absolute object-cover w-full h-full bg-no-repeat -z-10'/>
                                <div>TOYOTA LAND CRUISER PRADO</div>
                                <img src={hilux} className='absolute object-cover w-full h-full bg-no-repeat -z-10'/>
                                <div>TOYOTA HILUX</div>
                        */}
                        <img src={hilux} className='absolute object-cover w-full h-full bg-no-repeat -z-10'/>
                        <div className='absolute right-0 grid justify-end p-20 mt-20 bg-zinc-500 w-fit'>
                            <div className='flex justify-center text-6xl font-black leading-10 text-center'>
                                BANAN<br/>REACT
                            </div>
                            <div className='pt-2 text-xl text-center'>
                                CAR`S
                            </div>
                        </div>
                        <Footer/>                        
                    </div>
                </div>
        </>
    )
};

export default Lannding;