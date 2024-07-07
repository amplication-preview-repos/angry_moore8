import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductEntryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dateTimeOfArrival" source="dateTimeOfArrival" />
        <TextInput label="status" multiline source="status" />
        <NumberInput step={1} label="weight" source="weight" />
        <TextInput label="productId" source="productId" />
        <TextInput label="productCode" source="productCode" />
      </SimpleForm>
    </Edit>
  );
};
