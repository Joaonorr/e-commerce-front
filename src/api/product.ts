import * as apiRequireds from "../environment/common/apiRequireds";
import { URLS } from "../environment/common/urls";

export const getProduct = () => {
  return apiRequireds.getMethod(URLS.PRODUCT);
};

export const getProductByCategory = (
  page: number,
  limit: number,
  categoryId: number,
  attributeOrder: string,
  order: string
) => {
  return apiRequireds.getMethodWithParams(`${URLS.PRODUCT}/filter`, {
    page,
    limit,
    categoryId,
    attributeOrder,
    order,
  });
};

export const getProductById = (id: number) => {
  return apiRequireds.getMethod(`${URLS.PRODUCT}/${id}`);
};
