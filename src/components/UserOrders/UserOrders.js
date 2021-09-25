import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

const UserOrders = (props) => {
    const { name, price } = props.order;
    return (
        <div>
            <Row>
            <Col><h5>{name}</h5></Col>
            <Col><h5>1</h5></Col>
            <Col><h5>${price}</h5></Col>
        </Row>
        <hr />
        </div>
    );
};

export default UserOrders;