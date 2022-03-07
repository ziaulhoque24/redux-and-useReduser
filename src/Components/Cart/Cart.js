import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/CartActions';

const Cart = (props) => {
    const {cart, removeFromCart} =props
    return (
        <div>
            <h1>this is cart</h1>
           { cart.map(data=> <h1 key={data.cartId}> {data.name} <button  onClick={()=>removeFromCart(data.cartId)}>delete</button></h1>) }
        </div>
    );
};
const mapStateToProps = state =>{return {cart : state.cart}}
const mapDispatchToProps = { removeFromCart : removeFromCart}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);