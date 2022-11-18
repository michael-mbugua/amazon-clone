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
            <div className='hidden sm:flex items-center flex-grow h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 cursor-pointer m-2'>
                <input className='flex-grow items-center flex-shrink rounded-l-md focus:outline-none' type="text" />
                <SearchIcon className="h-12 p-4 "/>
            </div>
            <div className='text-white flex items-center sm-xs space-x-6 whitespace-nowrap'>
                <div className='link'>
                    <p>Hello Michael Mbugua</p>
                    <p className='font-extrabold md:small'>Account & Lists</p>
                </div>
                <div className='link'>
                    <p className='font-extrabold md:small'>Returns</p>
                    <p className='font-extrabold md:small'>& Orders</p>
                </div>
                <div className='relative link flex items-center'>
                    <ShoppingCartIcon className='h-10'/>
                    <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>0</span>
                    <p className=' hidden md:inline-block items-center font-extrabold md:small'>Basket</p>
                </div>

            </div>
        </div>
        <div className='flex items-center bg-amazon_blue-light top-10 text-white space-x-3 p-2 pl-6' >
            <p className='flex link items-center '>
                <MenuIcon className='h-6 mr-1'/> All
            </p>
            <p className='link'>Prime Video</p>
            <p className='link'>Amazon Business Video</p>
            <p className='link'>Today's Deal</p>
            <p className='hidden link lg:inline-flex'>Electronics</p>
            <p className='hidden link lg:inline-flex'>Food & Grocery</p>
            <p className='hidden link lg:inline-flex'>Prime</p>
            <p className='hidden link lg:inline-flex'>Buy Again</p>
            <p className='hidden link lg:inline-flex'>Shopper Toolkit</p>
            <p className='hidden link lg:inline-flex'>Health & Personal Care</p>
            
        </div>
    </header>
    )
}

export default Headers