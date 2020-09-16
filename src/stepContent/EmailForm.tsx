import * as React from "react";
import styled from "@emotion/styled";
import { Field } from "formik";
import Container from "./shared/Container";
import Header from "./shared/Header";

export default () => {
  return (
    <Container>
      <Header>Input your email address.</Header>
      Email address: <Field name="email" placeholder="sample@example.com" />
    </Container>
  );
};
