import React, { useEffect } from 'react'
import ProductCard from './product-card';
import getProduct from '../index'
import { useState } from 'react';
import Loader from './loader';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);


  useEffect(() => {
    setLoader(true);
    getProduct()
      .then((res) => {
        setProducts(res);
      })
      .catch(({ message }) => {
        console.log(message);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

    
    
    const deleteProduct = (id) => {
        const newProducts = products.filter((p) => p.id != id);
        setProducts(newProducts);
      };
    
      const viewProduct = (id)=>{
        setOpenModal(id);
      }


  return (
     <div className='mb-10'>
      {loader ? <Loader/> :
      <div className="grid grid-cols-3 gap-3">
      {products &&
        products.map((p) => (
          <ProductCard viewProduct={viewProduct} deleteProduct={deleteProduct} key={p.id} product={p} />
        ))}
    </div>}
    
    {/* <ProducModal openModal={openModal} setOpenModal={setOpenModal}/> */}
  </div>
  )
}
