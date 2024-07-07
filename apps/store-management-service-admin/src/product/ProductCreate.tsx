import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="price" source="price" />
        <TextInput label="lot" source="lot" />
        <DateTimeInput label="creationDate" source="creationDate" />
        <NumberInput
          step={1}
          label="numberOfAvailableProducts"
          source="numberOfAvailableProducts"
        />
        <TextInput label="uniqueIdentifier" source="uniqueIdentifier" />
      </SimpleForm>
    </Create>
  );
};
