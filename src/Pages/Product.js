
import React from 'react';
import Data from '../Data/Data';
import Navbar from '../components/nav';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import Button from '../components/Button';

function Product() {
    return (
        <div>
            <Header />
            <Navbar />
            <div className='width_set'>

                <div className='pro-parent'>
                    {Data.products.map((val, ind) => {
                        const { image, price, name, id } = val;
                        return (
                            <div className='card' key={id}>
                                <Link to={`/productScreen/${id}`}>
                                    <img className="medium" src={image} alt='product' />
                                </Link>
                                <div className="card-body">
                                    <Link to={`/productScreen/${id}`}>
                                        <h5>{name}</h5>
                                    </Link>
                                    <div className='price'>
                                        <p>{`${price} PKR`}</p>
                                    </div>
                                </div>
                            </div>

                        )
                    })}

                </div>
            </div>
            <Button />
            <Footer />
          
        </div>
    )
}

export default Product;
