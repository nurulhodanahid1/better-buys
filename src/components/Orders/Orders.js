import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import './Orders.css'

const Orders = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const productDetail = products.find(product => product._id === productId);

    return (
        <div>
            <Container>
            <h2>Checkout</h2>
            <Card style={{ width: '50rem' }}>
                <Card.Body>
                    <Row>
                        <Col>Description</Col>
                        <Col>Quantity</Col>
                        <Col>Price</Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>{productDetail.name}</Col>
                        <Col>1</Col>
                        <Col>${productDetail.price}</Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={12} md={8}>Total</Col>
                        <Col xs={6} md={4}>${productDetail.price}</Col>
                    </Row>
                </Card.Body>
            </Card>
            <Row>
                <Col xs={12} md={6}></Col>
                <Col xs={6} md={6}><Button className="checkout-btn" variant="primary">Checkout</Button></Col>
            </Row>
            </Container>
        </div>
    );
};

export default Orders;