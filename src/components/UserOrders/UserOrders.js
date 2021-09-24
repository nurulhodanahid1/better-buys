import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

const UserOrders = (props) => {
    const { name, price } = props.order;
    return (
        <div>
            <Row>
            <Col>{name}</Col>
            <Col>1</Col>
            <Col>${price}</Col>
        </Row>
        <hr />
        </div>
    );
};

export default UserOrders;