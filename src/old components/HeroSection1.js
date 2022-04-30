import React from 'react';
import {ReactComponent as Heroimg} from '../img/undraw_starry_window_re_0v82.svg'

export default function HeroSection1() {
    return (
        <div id="home" className="flex bg-sky-700 items-center flex-col md:flex-row pb-10 md:h-screen">
            <div className="flex-1 text-center md:p-10 p-2">
                <h1 className='text-6xl font-bold text-center mb-5'>Captivating Title</h1>
                <hr></hr>
                <h2 className='mt-5 text-xl whitespace-normal'>The man looking outside the window represent the sheer quality of our product.</h2>
                <h2 className='mt-5 text-xl pb-5'>Competitors don't have that kind of windows!</h2>
            </div>
            <div className="md:flex-1 pb-20">
                <Heroimg className='md:pr-10  md:max-h-[80vh] max-h-[50vh] w-full'/>
            </div>
        </div>
)}

//md:h-[90vh]