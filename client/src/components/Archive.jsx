import React from 'react'

// icons 
import { FaArrowLeft } from "react-icons/fa";

// react router dom
import { Link } from 'react-router-dom';

const Archive = () => {
    return (
        <div className='w-[80%] mx-auto flex flex-col gap-5 py-5'>
            <div>
                <Link className='flex  items-center gap-2 cursor-pointer' to="/profil">
                    <FaArrowLeft />
                    <p className='text-2xl'>Archive</p>
                </Link>
            </div>
            <hr />
            <p className='text-center'>You have not any stories.</p>
        </div>
    )
}

export default Archive