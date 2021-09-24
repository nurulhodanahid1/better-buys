import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import { Row, Container } from 'react-bootstrap';
import './Home.css';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://morning-castle-00405.herokuapp.com/products")
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    const history = useHistory();
    const handleProductSelect = id => {
        history.push(`/orders/${id}`)
    }
    return (
        <Container>
            <Row>
                {
                    products.map(product => <Product handleProductSelect={handleProductSelect} key={product._id} product={product}></Product>)
                }
            </Row>
        </Container>
    );
};

export default Header;