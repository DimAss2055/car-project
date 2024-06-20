import React from 'react';
import user from "../images/user.svg";
import search from "../images/search.svg";


const NavBar = () => {


    return(
        <>
            <nav className='flex justify-start h-32 pr-16 font-bold grow bg-slate-200 text-zinc-500/75'>
                <a href="" className='m-auto text-slate-900'>PRODUCT</a>
                <a href="" className='m-auto'>SERVISES</a>
                <a href="" className='m-auto'>CONTACT</a>
                <div className='flex items-center justify-around gap-6'>
                    <img src={search} className='flex w-5 h-5 m-auto cursor-pointer'/>
                    <img src={user} className='flex w-5 h-5 m-auto cursor-pointer'/>
                </div>
            </nav>
        </>
    )
};

export default NavBar;