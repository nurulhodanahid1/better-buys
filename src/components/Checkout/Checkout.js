import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import { UserContext } from '../../App';

const Checkout = () => {
    const [signInUser, setSignInUser] = useContext(UserContext);
    const { productId } = useParams();
    const [products, setProducts] = useState([]);
    const [userOrders, setUserOrders] = useState();
    useEffect(() => {
        fetch("https://morning-castle-00405.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const productDetail = products.find(product => product._id === productId);

    const handleOrderCheckout = () => {
        const newOrder = { ...signInUser, ...productDetail };
        fetch('https://morning-castle-00405.herokuapp.com/addOrders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    return (
        <div>
            <Container>
                <h3>Hello {signInUser.name}! Please order this items right now!</h3>
                <h2>Checkout</h2>
                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                        <Row>
                            <Col>Description</Col>
                            <Col>Quantity</Col>
                            <Col>Price</Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>{productDetail?.name}</Col>
                            <Col>1</Col>
                            <Col>${productDetail?.price}</Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col xs={12} md={8}>Total</Col>
                            <Col xs={6} md={4}>${productDetail?.price}</Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Row>
                    <Col xs={12} md={6}></Col>
                    <Col xs={6} md={6}><Button onClick={handleOrderCheckout} className="checkout-btn" variant="primary">Checkout</Button></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Checkout;