import React from 'react';
import { Col, Row} from 'react-bootstrap';
import deleteIcon from './Group 33150.png';
import './ManageProduct.css'

const ManageProduct = (props) => {
    const { name, price, imageURL, _id } = props.product;
    const handleDeleteProduct = props.handleDeleteProduct;
    return (
        <div>
            <Row>
                <Col>{name}</Col>
                <Col>1</Col>
                <Col>${price}</Col>
                <Col><button onClick={() => handleDeleteProduct(_id)} className="action-button"><img src={deleteIcon} alt="" /></button></Col>
            </Row>
            <hr />
        </div>
    );
};

export default ManageProduct;