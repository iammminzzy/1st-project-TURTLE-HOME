import React, { useState, useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import './SubCategory.scss';

const SubCategory = () => {
  const [products, setProducts] = useState([]);

  /* 데이터 로딩 */
  useEffect(() => {
    fetch('/data/mock.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <section className="products">
      <ul className="product-items">
        {products.map(({ id, url, alt, name, price }) => (
          <ProductList key={id} url={url} alt={alt} name={name} price={price} />
        ))}
      </ul>
    </section>
  );
};

export default SubCategory;
