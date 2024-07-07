import { ProductEntry as TProductEntry } from "../api/productEntry/ProductEntry";

export const PRODUCTENTRY_TITLE_FIELD = "productId";

export const ProductEntryTitle = (record: TProductEntry): string => {
  return record.productId?.toString() || String(record.id);
};
