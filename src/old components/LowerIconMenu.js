import React from 'react';
import { Link } from "react-router-dom";
import { HomeIcon, CurrencyDollarIcon, LocationMarkerIcon, MailIcon } from '@heroicons/react/solid';

export default function LowerIconMenu(){

    return(
        <div className='flex justify-evenly bg-gray-200 py-5 rounded-t-2xl shadow-xl opacity-90 
            backdrop-blur-2xl backdrop-filter'>

            <Link to="/"><HomeIcon className="h-10 w-10 text-blue-500"/></Link>
            <Link to="/price"><CurrencyDollarIcon className="h-10 w-10 text-blue-500"/></Link>
            <Link to="/map"><LocationMarkerIcon className="h-10 w-10 text-blue-500"/></Link>
            <Link to="/mail"><MailIcon className="h-10 w-10 text-blue-500"/></Link>
        </div>
)}