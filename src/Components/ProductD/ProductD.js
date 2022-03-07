import React from 'react';

const ProductD = ({pd, addToCart}) => {
   
    return (
        <div>
            <h1 style={{border: "5px solid red"}}>{pd.name} <button onClick={()=>addToCart(pd.id, pd.name)}>Add Cart</button></h1>

        </div>
    );
};

export default ProductD;