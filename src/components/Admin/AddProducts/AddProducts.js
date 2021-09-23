import React from 'react';
import { useForm } from "react-hook-form";
import {useState} from 'react';
import axios from "axios";

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
        const url = `http://localhost:5000/addProducts`;
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Product name</p>
                <input defaultValue="New exiting event" name="name" {...register("name")} />
                <p>Product image</p>
                <input type="file" onChange={handleImageUpload} />
                <p>Product price</p>
                <input type="number" defaultValue="00" price="price" {...register("price")} />
                <br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;