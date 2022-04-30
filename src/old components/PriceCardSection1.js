import React from 'react';

export default function PricingSection1() {
    return (
        <div id="price" className='min-h-screen bg-zinc-800 text-slate-200 py-10 flex flex-col gap-4 content-center m-auto'>
            <h2 className='text-4xl font-bold text-center py-5'>Choose a Plan that fits you</h2>
            <div id="pricesection" className="flex p-10 pb-20 items-stretch gap-10 flex-col md:flex-row">
                <div className="flex-1 w-[90%] mx-auto text-center bg-zinc-700 rounded-xl shadow-lg p-10 hover:shadow-md hover:shadow-sky-900">
                    <h2 className='text-4xl font-bold text-center mb-5'>Silver</h2>
                    <h2 className='my-5 text-xl'>Reasons why silver is good.</h2>
                    <hr className='h-2 bg-sky-600 border-0 rounded-full'></hr>
                    <h2 className='mt-5 text-6xl text-sky-600'>19$
                    <span className='text-sm text-slate-200'>/mo</span></h2>
                </div>
                <div className="flex-1 w-[90%] mx-auto text-center bg-zinc-700 rounded-xl shadow-lg p-10 hover:shadow-md hover:shadow-sky-900">
                    <h2 className='text-4xl font-bold text-center mb-5'>Gold</h2>
                    <h2 className='my-5 text-xl'>Reasons why gold is good.</h2>
                    <hr className='h-2 bg-sky-600 border-0 rounded-full'></hr>
                    <h2 className='mt-5 text-6xl text-sky-600'>29$
                    <span className='text-sm text-slate-200'>/mo</span></h2>
                </div>
                <div className="flex-1 w-[90%] mx-auto text-center bg-zinc-700 rounded-xl shadow-lg p-10 hover:shadow-md hover:shadow-sky-900">
                    <h2 className='text-4xl font-bold text-center mb-5'>Platinum</h2>
                    <h2 className='my-5 text-xl'>Reasons why platinum is better.</h2>
                    <hr className='h-2 bg-sky-600 border-0 rounded-full'></hr>
                    <h2 className='mt-5 text-6xl text-sky-600'>49$
                    <span className='text-sm text-slate-200'>/mo</span></h2>
                </div>
            </div>
        </div>
)}