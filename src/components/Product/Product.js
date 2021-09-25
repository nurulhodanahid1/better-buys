import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import './Product.css'

const Product = (props) => {
    const { name, price, imageURL, _id } = props.product;
    const handleProductSelect = props.handleProductSelect;
    return (
        <div className="col-md-4 card-gap">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imageURL} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Row>
                        <Col><h4 className="pd-price">${price}</h4></Col>
                        <Col><Button onClick={()=>handleProductSelect(_id)} variant="success">Buy now</Button></Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;