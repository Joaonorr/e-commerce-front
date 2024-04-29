import * as apiRequireds from "../environment/common/apiRequireds";
import { URLS } from "../environment/common/urls";

export const getProduct = () => {
  return apiRequireds.getMethod(URLS.PRODUCT);
};

export const getProductByCategory = (
  page: number,
  limit: number,
  categoryId: number
) => {
  return apiRequireds.getMethodWithParams(`${URLS.PRODUCT}/filter`, {
    page,
    limit,
    categoryId,
  });
};
