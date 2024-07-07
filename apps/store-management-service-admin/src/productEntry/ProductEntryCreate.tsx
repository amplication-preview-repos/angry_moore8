import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductEntryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="dateTimeOfArrival" source="dateTimeOfArrival" />
        <TextInput label="status" multiline source="status" />
        <NumberInput step={1} label="weight" source="weight" />
        <TextInput label="productId" source="productId" />
        <TextInput label="productCode" source="productCode" />
      </SimpleForm>
    </Create>
  );
};
