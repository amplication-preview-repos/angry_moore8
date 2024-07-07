import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="code" source="code" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <TextField label="price" source="price" />
        <TextField label="lot" source="lot" />
        <TextField label="creationDate" source="creationDate" />
        <TextField
          label="numberOfAvailableProducts"
          source="numberOfAvailableProducts"
        />
        <TextField label="uniqueIdentifier" source="uniqueIdentifier" />
      </Datagrid>
    </List>
  );
};
