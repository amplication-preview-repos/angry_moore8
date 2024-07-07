import { ProductEntryWhereInput } from "./ProductEntryWhereInput";
import { ProductEntryOrderByInput } from "./ProductEntryOrderByInput";

export type ProductEntryFindManyArgs = {
  where?: ProductEntryWhereInput;
  orderBy?: Array<ProductEntryOrderByInput>;
  skip?: number;
  take?: number;
};
