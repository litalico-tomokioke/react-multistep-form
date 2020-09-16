import * as React from "react";
import { Field } from "formik";
import Container from "./shared/Container";
import Header from "./shared/Header";

export default () => {
  return (
    <Container>
      <Header>Choose your favorite color.</Header>
      <Field component="select" name="color">
        <option value="">Favorite Color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </Field>
    </Container>
  );
};
