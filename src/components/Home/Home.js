import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import { Row, Container, Spinner, Col, InputGroup, FormControl } from 'react-bootstrap';
import './Home.css';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://morning-castle-00405.herokuapp.com/products")
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
    }, []);

    const history = useHistory();
    const handleProductSelect = id => {
        history.push(`/checkout/${id}`)
    }
    return (
        <Container>
            <form className="col-md-6 m-auto py-5">
                <div className="input-group mb-3">
                    <input type="text" name="" id="" className="form-control" placeholder="Search your products" />
                    <div className="input-group-append">
                        <button id="find-meal" type="button" className="btn btn-success">Search</button>
                    </div>
                </div>
            </form>

            {
                loading ?
                    <Row>
                        <Col></Col>
                        <Col><Spinner className="loading" animation="border" variant="success" /></Col>
                    </Row> :
                    <Row>
                        {
                            products.map(product => <Product handleProductSelect={handleProductSelect} key={product._id} product={product}></Product>)
                        }
                    </Row>
            }
        </Container>
    );
};

export default Header;