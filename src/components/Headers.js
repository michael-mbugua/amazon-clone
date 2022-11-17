import React from 'react'
import Image from "next/image"
import {MenuIcon,SearchIcon,ShoppingCartIcon,} from "@heroicons/react/outline"

const Headers = () => {
    return (
    <header>
        <div className='flex items-center bg-amazon_blue p-1 flex=grow py-2'>
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image 
                src='https://links.papareact.com/f90'
                width={150}
                height={40}
                className="cursor-pointer"
                />
            </div>
            <div className='bg-yellow-400'>
                <input type="text" />
                <SearchIcon className="h-12 p-4"/>
            </div>
        </div>
        <div></div>
    </header>
    )
}

export default Headers