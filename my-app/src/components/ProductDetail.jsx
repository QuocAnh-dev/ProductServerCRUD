// import React, {useState} from 'react';
// import PRODUCTS from '../stores/PRODUCT';
function ProductDetail({product, onDelete, onUpdate}) {

    // function handleDelete(deleteProduct) {
    //     const newList  = productList.filter((p) => p.id !== deleteProduct.id);
    //     console.log(newList);
    //     setList(newList);
    // }
    return(
        <div className="product-details">
            <div>Name: {product.productName}</div>
            <div>Quantity: {product.quantity}</div>
            <div>Price: {product.price}$</div>
            {/* <div>{product.createDate}</div> */}
            <button onClick={() => onDelete(product)}>Delete product</button>
            <button onClick={() => {onUpdate(product)}}>Update product</button>
            {}
        </div>
    );
}

export default ProductDetail;