import React, { useState, useEffect } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import { Card, Col, Row, Container } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://morning-castle-00405.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleDeleteProduct = (id) => {
        fetch(`https://morning-castle-00405.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    console.log(result);
                }
            })
    }
    return (
        <div>
            <h3>Manage products</h3>
            <Container>
                <Card style={{ width: '50rem' }}>
                    <Card.Body>
                        <Row>
                            <Col>Name</Col>
                            <Col>Quantity</Col>
                            <Col>Price</Col>
                            <Col>Action</Col>
                        </Row>
                        <hr />
                        {
                            products.map(product => <ManageProduct handleDeleteProduct={handleDeleteProduct} key={product._id} product={product}></ManageProduct>)
                        }
                    </Card.Body>
                </Card>
            </Container>

        </div>
    );
};

export default ManageProducts;