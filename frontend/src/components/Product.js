import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

// we are destructring here {product} giving access of product arrow function which is used in HomeScreen.js.
const Product = ({ product }) => {
    return (
        <Card className='my-3 p-3 rounded'> {/* my-3 for giving margin*/}
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>
            <Card.Body>
                <Link to={`/products/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                    />
                </Card.Text>
                <Card.Text as='h3'>${product.price} </Card.Text> {/* here we do card.text as ='h3', this means this product price card gets h3 heading */}
            </Card.Body>
        </Card>

    )
}

export default Product