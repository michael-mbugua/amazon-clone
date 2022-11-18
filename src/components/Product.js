import React from 'react'
import Image from 'next/dist/client/image'

const Product = ({id,image,title,category,price,description}) => {
    return (
    <div>
        <p>{category}</p>
        <Image src={image} height={200} width={200} objectFit="contain"/>

        <h4>{title}</h4>
    </div>
    )
}

export default Product