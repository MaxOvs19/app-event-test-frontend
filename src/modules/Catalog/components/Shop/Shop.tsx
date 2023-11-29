import React, { useEffect } from 'react';

import Catalog from 'modules/Catalog/components/Catalog/Catalog';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from 'modules/Catalog/api/fetchGetProducts';
import { getCatalogProducts, loadCatalog } from 'modules/Catalog/store/catalogSlise';
import { IProduct } from 'interfaces/IProduct.interface';

const Shop = () => {
  const dispatch = useDispatch();

  const products: Array<IProduct> = useSelector(getCatalogProducts);

  useEffect(() => {
    if (products.length === 0) {
      getProduct().then((res) => {
        dispatch(loadCatalog(res.items));
      });
    }
  }, []);

  return (
    <div className="shop">
      <Catalog items={products} />
    </div>
  );
};

export default Shop;
