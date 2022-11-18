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
    <div>
        <p>{category}</p>
        <Image src={image} height={200} width={200} objectFit="contain"/>

        <h4>{title}</h4>
        <div className='flex'>
            {Array(rating)
            .fill()
            .map((_,i) => (
                <StarIcon className='h-5 '/>
            ))}
        </div>
        <p>{description}</p>
        <div>
            <CurrencyFormat quantity={price} currency="KSH"/>

        </div>
    </div>
    )
}

export default Product