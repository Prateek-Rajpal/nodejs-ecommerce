import React from 'react'
import { Card } from 'react-bootstrap'

// we are destructring here {product} giving access of product arrow function which is used in HomeScreen.js.
const Product = ({ product }) => {
    return (
        <Card className='my-3 p-3 rounded'> {/* my-3 for giving margin*/}
        <a href={`/product/${product._id}`}>
            <Card.Img src= {product.image} variant ='top' />
        </a>
            <Card.Body>
                <a href={`/products/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as='div'>
                    <div className='my-3'>
                        {product.rating} from {product.numReviews} reviews
                    </div>
                </Card.Text>
                <Card.Text as='h3'>${product.price} </Card.Text> {/* here we do card.text as ='h3', this means this product price card gets h3 heading */}
            </Card.Body>
        </Card>

    )
}

export default Product