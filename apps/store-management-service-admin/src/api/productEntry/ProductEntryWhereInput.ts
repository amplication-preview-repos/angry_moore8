import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductEntryWhereInput = {
  id?: StringFilter;
  dateTimeOfArrival?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  weight?: IntNullableFilter;
  productId?: StringNullableFilter;
  productCode?: StringNullableFilter;
};
