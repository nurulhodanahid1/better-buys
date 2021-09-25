import React from 'react';
import { useForm } from "react-hook-form";
import {useState} from 'react';
import axios from "axios";
import { Col, Row } from 'react-bootstrap';

const AddProducts = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    console.log("img", imageURL)

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };
        console.log("data", productData);
        const url = `https://morning-castle-00405.herokuapp.com/addProducts`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => console.log("server site response successfully", res))
    };
    
    const handleImageUpload = event => {
        console.log(event.target.files);
        const imageData = new FormData();
        imageData.set('key', '400b38040e9dc25b9a48e040ad618446');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            // console.log(response);
            // console.log(response.data.data.display_url)
            setImageURL(response.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
          });
        
    };
    return (
        <div>
            <h3>Add your products</h3>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col><h5>Product name:</h5></Col>
                    <Col><input defaultValue="New exiting event" name="name" {...register("name")} /></Col>
                </Row>
                <hr />
                <Row>
                    <Col><h5>Add image:</h5></Col>
                    <Col><input type="file" onChange={handleImageUpload} /></Col>
                </Row>
                <hr />
                <Row>
                    <Col><h5>Add price:</h5></Col>
                    <Col><input type="number" defaultValue="00" price="price" {...register("price")} /></Col>
                </Row>
                <hr />
                
                <Row>
                    <Col></Col>
                    <Col><input className="btn btn-success" type="submit" /></Col>
                </Row>
            </form>
        </div>
    );
};

export default AddProducts;