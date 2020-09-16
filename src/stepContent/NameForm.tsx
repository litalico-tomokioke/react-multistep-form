import * as React from "react";
import styled from "@emotion/styled";
import { Field } from "formik";
import Container from "./shared/Container";
import Header from "./shared/Header";

export default () => {
  return (
    <Container>
      <Header>Tell me your name.</Header>
      First Name: <Field name="firstName" placeholder="Tomoki" />
      <br />
      Last Name: <Field name="lastName" placeholder="Oke" />
    </Container>
  );
};
