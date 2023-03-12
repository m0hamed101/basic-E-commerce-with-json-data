import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetiles = () => {
    let { ID } = useParams();
    const [product, setproduct] = useState();
    useEffect(() => {
        fetch(`http://localhost:9000/product/${ID}`)
            .then((res) => res.json())
            .then((product) => {
                setproduct(product)
            }, [])


    })
    return (
        <div>
            {product && <h1>{product.title}</h1>}
            <br />
            {product && <h1>{product.price}</h1>}
            <br />
            {product && <h1>{product.description}</h1>}
        </div>
    )
}
