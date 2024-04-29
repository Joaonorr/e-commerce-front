import * as apiRequireds from "../environment/common/apiRequireds";
import { URLS } from "../environment/common/urls";

export const getCategories = () => {
  return apiRequireds.getMethod(URLS.CATEGORY);
};
