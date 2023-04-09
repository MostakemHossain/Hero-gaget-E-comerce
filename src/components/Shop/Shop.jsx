import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb } from '../../utilities/FakeDB';



import ProductCard from '../Cards/ProductCard';

const Shop = () => {
    const productData= useLoaderData();

    const handleAddToCart=(id)=>{
       addToDb(id)
    }
    
    return (
        <div className='product-container' >
        {
            productData.map(product=> <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart}></ProductCard>)
        }
            
        </div>
    );
};

export default Shop;