import React, { useState, useEffect, useContext } from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import './Orders.css'
import UserOrders from '../UserOrders/UserOrders';

const Orders = () => {
    const [signInUser, setSignInUser] = useContext(UserContext);
    const [userOrders, setUserOrders] = useState();

    useEffect(() => {
        fetch('https://morning-castle-00405.herokuapp.com/orders?email='+signInUser.email)
            .then(res => res.json())
            .then(data => setUserOrders(data))
    }, [])

    return (
        <div>
            <Container>
                <h2>Hello, <span style={{color: '#0a58ca'}}>{signInUser.name}</span> ! You have {userOrders?.length} orders. Your previous orders list:</h2>
                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                        <Row>
                            <Col>Description</Col>
                            <Col>Quantity</Col>
                            <Col>Price</Col>
                        </Row>
                        <hr />
                        {
                            userOrders?.map(order => <UserOrders key={order._id} order={order}></UserOrders>)
                        }
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Orders;