import React, { useState, useEffect } from 'react';

import { getProductList } from "./services/api";

import Header from './components/Header'
import CatalogCard from './components/catalogCard'

import './App.css';

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let mounted = true;
        getProductList()
            .then(items => {
                if(mounted) {
                    setProducts(items.products)
                }
            })
        return () => mounted = false;
  }, []);


  return (
    <div className="App">
        <Header />
        <div className="catalog-list">
            {
                products.map((product, index) => {
                    return(
                        <CatalogCard
                            key={index}
                            name={product.name}
                            image={product.images[0].src}
                        ></CatalogCard>
                    )
                })
            }
        </div>
    </div>
  );
}

export default App;
