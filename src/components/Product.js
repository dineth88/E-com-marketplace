import React from 'react'
import {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Alert, CardFooter } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import StatusCode from '../utils/StatusCode';

function Product() { 

    const dispatch = useDispatch();
    const {data: products, status} = useSelector(state => state.products);

    useEffect(() => {
        // Dispatch an action to fetch products
        dispatch(getProducts());
    }, []);

    //loading widget
    if(status===StatusCode.LOADING){
        return <p>Loading...</p>
    }

    if(status===StatusCode.ERROR){
        return <Alert key="danger" variant="danger">Something went Wrong! Try again later..</Alert>
    }
    
    //console.log('Products data:', products); // Check the structure here

    const addToCart=(product)=>{
        //dispatch an add action
        dispatch(add(product))
    }

    const cards = products.map(product => (
        <div className="col-md-3" style={{marginBottom:'10px'}}>
            <Card key={product.id} className="h-100">
                <div className="text-center">
                <Card.Img variant="top" src={product.image} style={{width:'100px', height:'130px'}}/>
                </div>
                
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    LKR: {product.price}
                    </Card.Text>
                </Card.Body>
                <CardFooter style={{background:'white'}}>
                    <Button variant="primary" onClick={()=>addToCart(product)}>Add to cart</Button>
                </CardFooter>
                <></>
            </Card>
        </div>
    ));

  return (
    <>
        <h1>Product Dashboard</h1>
        <div className="row">
            {cards}
        </div>
    </>
  )
}

export default Product