import * as apiRequireds from "../environment/common/apiRequireds";
import { URLS } from "../environment/common/urls";

export const getCategories = () => {
  return apiRequireds.getMethod(`${URLS.CATEGORY}/filter?page=1&limit=10`);
};

export const getCategoryById = (id: number) => {
  return apiRequireds.getMethod(`${URLS.CATEGORY}/${id}`);
};
