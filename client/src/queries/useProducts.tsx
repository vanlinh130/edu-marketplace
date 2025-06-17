import productsApiRequest from "@/apiRequests/product";
import { useQuery } from '@tanstack/react-query';


export const useProductsQuery = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: () => productsApiRequest.getAllProduct(),
  });
};