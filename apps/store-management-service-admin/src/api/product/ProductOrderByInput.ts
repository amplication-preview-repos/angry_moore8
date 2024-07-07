import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  code?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  price?: SortOrder;
  lot?: SortOrder;
  creationDate?: SortOrder;
  numberOfAvailableProducts?: SortOrder;
  uniqueIdentifier?: SortOrder;
};
