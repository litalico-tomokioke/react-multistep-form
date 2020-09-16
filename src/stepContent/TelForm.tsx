import * as React from "react";
import styled from "@emotion/styled";
import { Field } from "formik";
import Container from "./shared/Container";
import Header from "./shared/Header";

export default () => {
  return (
    <Container>
      <Header>Input your tel number.</Header>
      Phone number: <Field name="tel" placeholder="08000000000" />
    </Container>
  );
};
