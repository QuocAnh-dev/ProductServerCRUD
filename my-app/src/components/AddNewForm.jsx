import axios from "axios";
import { useState } from "react";

function AddNewForm(){
    const[data, setData] = useState({
        name: "",
        quantity: "",
        price: ""
    });

    async function handleAdd(){
        const res = await axios.post('http://localhost:8080/product-server/api/products', data) 
        console.log(res);
    }

    return (
        <div>
            {
            (
                <div id="updateForm">
                    <h2>Update Product Information</h2>
                    <form action="#" method="POST">
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" onChange={(event) => setData({...data, name: event.target.value})} required/>
                    </div>
                    <div>
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" onChange={(event) => setData({...data, quantity: event.target.value})} required/>
                    </div>
                    
                    <div>
                        <label for="price">Price:</label>
                        <input type="number" id="price" name="price" onChange={(event) => setData({...data, price: event.target.value})} required/>
                    </div>
                    <div>
                        <button type="submit" onClick={handleAdd}>Submit</button>
                        <button type="button">Close</button>
                    </div>
                    
                    </form>
                </div>
                        )
            }
        </div>
    );
}
export default AddNewForm;