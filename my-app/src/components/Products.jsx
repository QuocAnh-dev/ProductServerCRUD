// import React from 'react';
import React, {useState, useEffect} from 'react';
// import PRODUCTS from '../stores/PRODUCT';
import ProductDetail from './ProductDetail';
import UpdateForm from './UpdateForm';
import AddNewForm from './AddNewForm';
import axios from 'axios';

function Products(){
    const[productDetail, setProductDetail] = useState(null);
    const[productList, setList] = useState([]);
    const[updateProduct, setUpdateProduct] = useState(null);
    const[addNewProduct, setAddNewProduct] = useState(false);

    function handleDelete(deleteProduct) {
        const newList = productList.filter((p) => p.id !== deleteProduct.id);                                                    
        console.log(newList);
        setList(newList);
    }

    function handleUpdate(updateProduct) {
        setUpdateProduct(updateProduct);
    }

    function handleAddnewProduct(){
        setUpdateProduct(null);
        setProductDetail(null);
        setAddNewProduct(true);
    }
    
    // console.log("state ", productDetail);            
    function showDetail(pou)  {                                 
        setProductDetail(pou);
    }

    useEffect(() => {
        axios.get("http://localhost:8080/product-server/api/products")
        .then((res) =>{
            setList(res.data);
            console.log(res.data);
        })
        .catch((error) => console.log(error))
    }, []);
    
    return(
        <><div className='product-list'>
            {productList.map((p) => (
                <div key={p.id} className='product-infor'>
                    <div className='default-img'>
                        <img src={p.image} alt="product-image" />
                    </div>
                    <div>{p.productName}</div>
                    
                    <button onClick={() => showDetail(p)}>Show details</button>
                </div>
            ))
            }
        </div>
            <button onClick={handleAddnewProduct}>Add new product</button>
        <div>
                {productDetail !== null ?
                <ProductDetail product={productDetail} onDelete={handleDelete} onUpdate={handleUpdate}></ProductDetail> : ""}
        </div>
        <div>
            {
                updateProduct !== null ?
                    <UpdateForm product={updateProduct} setList={setList} list={productList}></UpdateForm> : ""
            }
        </div>
        <div>
            {
                addNewProduct === true?
                <AddNewForm></AddNewForm> : ""
            }
        </div>
        </>
    )
}

export default Products;