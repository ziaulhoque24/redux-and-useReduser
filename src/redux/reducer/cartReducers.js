import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/CartActions";

const initialState = {
    cart: [], 
    product: [{name: 'Asus' , id : 1},
    {name: 'Dell' , id : 2},
    {name: 'Apple' , id : 3},
    {name: 'Google' , id : 4},
    {name: 'Walton' , id : 5}]}

const cartReducer = (state =initialState, action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {productId : action.id , name: action.name , cartId: state.cart.length +1}
            return {...state , cart: [...state.cart , newItem]}
            
            
            case REMOVE_FROM_CART:
                const newCart = state.cart.filter(data=> data.cartId !== action.id)
                return {...state , cart: newCart}     
        default:
               return state
    }


}
export default cartReducer;