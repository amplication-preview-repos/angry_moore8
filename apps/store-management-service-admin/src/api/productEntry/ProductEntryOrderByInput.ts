import { SortOrder } from "../../util/SortOrder";

export type ProductEntryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dateTimeOfArrival?: SortOrder;
  status?: SortOrder;
  weight?: SortOrder;
  productId?: SortOrder;
  productCode?: SortOrder;
};
