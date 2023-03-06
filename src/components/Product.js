import React from 'react';
import { Card } from 'react-bootstrap';

function Product({ product }) {
	return (
		<div>
			<Card className='my-3 p-3 rounded'>
				<a href='{`/product/${product._id}`}'>
					<Card.Img src={product.images[0]} variant='top' />
				</a>

				<Card.Body>
					<a href='{`/product/${product._id}`}'>
						<Card.Title as='div'>
							<strong>{product.name}</strong>
						</Card.Title>
					</a>
					<Card.Text as='div'>
						<div className='my-3'>
							{product.rating} from {product.numReviews} reviews
						</div>
					</Card.Text>
					<Card.Text as='h3'>
						<div className='my-3'>${product.unitPrice}</div>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Product;
