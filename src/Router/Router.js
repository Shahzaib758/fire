import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Services from '../Pages/services';
import Contact from '../Pages/Contact';
import Product from '../Pages/Product';
import ProductScreen from '../Pages/ProductScreen';



function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/productScreen/:id" element={<ProductScreen />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter
