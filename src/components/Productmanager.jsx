import React, { useState } from  'react';
    
    
const Productmanager = (props) => {
    const [title, settitle] = useState("");
    const [price, setprice] = useState(0);
    const [description, setdescription] = useState("");
    
    
    
    
    const createProduct = (e) => {
        e.preventDefault();
        const newUser = { title, price, description};
        console.log("Welcome", newUser);
    


    };
    
    return(
        <form onSubmit={ createProduct }>
            <div>
                <label>Title: </label> 
                <input type="text" onChange={ (e) => settitle(e.target.value) } /> 
            </div>
            <div>
                <label>Price: </label> 
                <input type="number" class="currency" onChange={ (e) => setprice(e.target.value) } />
            </div>
            <div>
                <label>Description: </label> 
                <input type="text" onChange={ (e) => setdescription(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default Productmanager;