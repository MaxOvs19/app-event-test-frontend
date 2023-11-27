import { IProduct } from 'interfaces/IProduct.interface';
import { IProductArray } from 'interfaces/IProductArray.interface';

export function getProduct() {
  const url = 'https://appevent.ru/dev/task1/catalog';

  let response: Promise<IProductArray>;

  response = fetch(url, {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    });

  return response;
}
