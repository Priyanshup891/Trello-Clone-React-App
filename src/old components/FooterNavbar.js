import React, { useState } from 'react';


function FooterNavbar() {
  
    

  return (
    <div className='bg-zinc-800 p-5 text-slate-200 py-10'>
      <div className='flex flex-row justify-evenly'>
          <div className='justify-start flex flex-col gap-2'>
            <h5 className='text-3xl font-semibold'>SiteMap</h5>
            <hr></hr>
            <a href='#' className='cursor-pointer hover:text-sky-500'>link 1</a>
            <a href='#' className='cursor-pointer hover:text-sky-500'>link 2</a>
            <a href='#' className='cursor-pointer hover:text-sky-500'>link 3</a>
          </div>
          <div className='justify-start flex flex-col gap-2'>
            <h5 className='text-3xl font-semibold '>Social</h5>
            <hr></hr>
            <a href='#' className='cursor-pointer hover:text-sky-500'>link s1</a>
            <a href='#' className='cursor-pointer hover:text-sky-500'>link s2</a>
            <a href='#' className='cursor-pointer hover:text-sky-500'>link s3</a>
          </div>
      </div>
      <br></br>
      <div className='flex justify-center py-5'>
        <p>Copyright @Aevum Electronics 2022</p>
      </div>
    </div>
  )
}

export default FooterNavbar;