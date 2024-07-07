export type ProductCreateInput = {
  code?: string | null;
  name?: string | null;
  description?: string | null;
  price?: number | null;
  lot?: string | null;
  creationDate?: Date | null;
  numberOfAvailableProducts?: number | null;
  uniqueIdentifier?: string | null;
};
