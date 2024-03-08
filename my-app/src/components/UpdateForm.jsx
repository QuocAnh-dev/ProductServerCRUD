import {React, useState, useEffect} from 'react';
// import PRODUCTS from '../stores/PRODUCT';
// import Products from '../components/Products';

function UpdateForm({product, setList, list, addNewProduct}) {
    // const[updateProduct, setUpdateProduct] = useState(product);
    const[formState, setFormState] = useState(product);

    useEffect(() => {
        setFormState(product);
    }, [product]);

    function update(event){
        event.preventDefault();
        const updateProduct = {...formState};
        
        const newList = list.map(item => {
            if(item.id === updateProduct.id){
                return updateProduct;
            } else {
                return item;
            }
        });
        setList(newList);
        alert('Successfully updated product');
    }

    function handleInputChange(event){
        const{name, value} = event.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return(
        <div>
        {
            (
                <div id="updateForm">
                    <h2>Update Product Information</h2>
                    <form action="#" method="PUT">
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" value={formState.name} onChange={handleInputChange} required/>
                    </div>
                    <div>
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value={formState.quantity} onChange={handleInputChange} required/>
                    </div>
                    
                    <div>
                        <label for="price">Price:</label>
                        <input type="number" id="price" name="price" value={formState.price} onChange={handleInputChange} required/>
                    </div>
                    <div>
                        <label for="createDate">Create Date:</label>
                        <input type="date" id="createDate" name="createDate" value={formState.createDate} onChange={handleInputChange} required/>
                    </div>
                    <div>
                        <input type="submit" value="Update" onClick={(event) => {update(event)}}/>
                        <button type="button">Close</button>
                    </div>
                    
                    </form>
                </div>
                        )
                    }
        </div>
    )
}
export default UpdateForm;