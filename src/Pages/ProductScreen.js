import React from 'react';
import Navbar from '../components/nav';
import Data from '../Data/Data';
import { useParams } from 'react-router-dom';

function ProductScreen(props) {
    const { id } = useParams();

    const {products} = Data;

    const dproduct = products.filter(element => element.id == id);

    if(!dproduct){
        return 
        <div>
           <p>No product found</p>
        </div>
    }

    return (
        <div>
            <Navbar />
            <h1>{dproduct[0].name}</h1>
            <h1>{dproduct[0].price}</h1>
            <h1>{dproduct[0].description}</h1>
            <img src={dproduct[0].image} alt='nono'/>
        </div>
    );
}

export default ProductScreen;
