import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductEntryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProductEntries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="dateTimeOfArrival" source="dateTimeOfArrival" />
        <TextField label="status" source="status" />
        <TextField label="weight" source="weight" />
        <TextField label="productId" source="productId" />
        <TextField label="productCode" source="productCode" />
      </Datagrid>
    </List>
  );
};
