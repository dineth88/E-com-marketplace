import React from 'react'
import { Button, Card, CardFooter } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';

function Cart() {

    const products = useSelector(state=>state.cart)

    const dispatch = useDispatch();

    const removeToCart=(id)=>{
        //dispatch a remove action
        dispatch(remove(id));
    }

    const cards = products.map(product => (
        <div className="col-md-12" style={{marginBottom:'10px'}}>
            <Card key={product.id} className="h-100">
                <div classname="text-center">
                <Card.Img variant="top" src={product.image} style={{width:'100px', height:'130px'}}/>
                </div>
                
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    LKR: {product.price}
                    </Card.Text>
                </Card.Body>
                <CardFooter style={{background:'white'}}>
                    <Button variant="danger" onClick={()=>removeToCart(product.id)}>Remove Item</Button>
                </CardFooter>
                <></>
            </Card>
        </div>
    ))

  return (
    <>
        <div className='row'>{cards}</div>
    </>
  )
}

export default Cart