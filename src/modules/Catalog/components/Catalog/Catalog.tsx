import { IProductArray } from 'interfaces/IProductArray.interface';
import { getProduct } from 'modules/Catalog/api/fetchGetProducts';
import { getCatalogProducts, loadCatalog } from 'modules/Catalog/store/catalogSlise';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Catalog = () => {
  const [dataCatalog, setDataCatalog] = useState<IProductArray>();
  const dispatch = useDispatch();

  useEffect(() => {
    getProduct().then((res) => {
      setDataCatalog(res);
    });
  }, []);

  useEffect(() => {
    dispatch(loadCatalog(dataCatalog?.items));
  }, [dataCatalog]);

  return <div></div>;
};

export default Catalog;
