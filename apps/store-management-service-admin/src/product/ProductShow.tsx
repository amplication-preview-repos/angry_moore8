import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
