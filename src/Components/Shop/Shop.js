import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/CartActions';
import Cart from '../Cart/Cart';
import ProductD from '../ProductD/ProductD';


const Shop = ({cart, product, addToCart}) => {
    return (
        <div> 
            <Cart></Cart>
            {product.map(Product=><ProductD addToCart={addToCart} pd={Product} key={Product.id}></ProductD>)}
        </div>
    );
};
const mapStateToProps = state=>{
    return {cart: state.cart, product: state.product}
}
const mapDispatchToProps = { addToCart : addToCart}
export default connect(mapStateToProps, mapDispatchToProps)(Shop);