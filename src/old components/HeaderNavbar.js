import React, { useState } from 'react';

function HeaderNavbar() {
  
    

  return (
    <div className='flex flex-row justify-between h-12 items-center overflow-hidden shadow-md bg-zinc-800'>
        <div className='justify-start '>
          <div>
            <a href="#" className='flex flex-row'>
                          <img src={require("../img/icon-aevum-solo-logo-shadow-250px.png")}  className="max-h-10"/>
                          <img src={require("../img/icon-aevum-solo-text-250px.png")} className="max-h-10 hidden md:block"/>
                      </a>
                  </div>
          </div>
        <div className='justify-end flex  items-center px-5'>
            <div className='flex flex-row gap-5 text-slate-200'>
                        <div>
                            <a href="#home">HOME</a>
                        </div>
                        <div>
                            <a href="#price">PRICE</a>
                        </div>
                        <div>
                            <a href="#where">WHERE</a>
                        </div>
                        <div>
                            <a href="#feedback">CONTACT</a>
                        </div>
                        
            </div>
        </div>
	  </div>
  )
}

export default HeaderNavbar;