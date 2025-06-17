import CommonConstants from "@/constants/common";
import http from "@/lib/https";
import { ProductsResponseType } from "@/schemaValidations/product.schema";


const productsApiRequest = {
  getAllProduct: () => {
    return http.get<ProductsResponseType>(CommonConstants.API_PRODUCT_PATH);
  }
};

export default productsApiRequest;