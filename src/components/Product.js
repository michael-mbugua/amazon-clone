import React from 'react'
import Image from 'next/dist/client/image';
import { StarIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
const MAX_RATING=5;
const MIN_RATING=1;

const Product = ({id,image,title,category,price,description}) => {
    const [rating]=useState(
        Math.floor(Math.random()*(MAX_RATING -MIN_RATING + 1)) + MIN_RATING
    )
    const [hasPrime]=useState(
        Math.random()<0.5)
    return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
        <Image src={image} height={200} width={200} objectFit="contain"/>

        <h4 className='my-3'>{title}</h4>
        <div className='flex'>
            {Array(rating)
            .fill()
            .map((_,i) => (
                <StarIcon  className='h-5  text-yellow-500'/>
            ))}
        </div>
        <p>{description}</p>
        <div>
            <CurrencyFormat quantity={price} currency="KSH"/>
        </div>
        {hasPrime &&(
            <div>
                <img className='' src="https://links.papareact.com/fdw" alt=""/>
                <p>FREE Next-day Delivery</p>
            </div>
        )}
        <button>Add to Basket</button>
    </div>
    )
}

export default Product