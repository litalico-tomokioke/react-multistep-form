import * as React from "react";
import styled from "@emotion/styled";
import { Field } from "formik";
import Container from "./shared/Container";
import Header from "./shared/Header";

const INTERESTS = [
  "space",
  "dog",
  "programming",
  "cooking",
  "sport",
  "swim",
  "reading",
  "study",
  "travel",
  "sleep",
  "game",
  "movie",
  "nature",
  "music",
  "comedy",
  "dance",
  "cat",
  "shopping",
  "drink",
  "sing",
  "basketball",
  "punish",
  "interview",
] as const;

const Label = styled.label`
  display: block;
  height: 2em;
  font-size: 16px;
`;

export default () => {
  return (
    <Container>
      <Header>
        Check your interesets.(multiple)
        <br />
      </Header>
      {INTERESTS.map((interest) => {
        return (
          <Label key={interest}>
            <Field type="checkbox" name="interests" value={interest} />
            {interest}
          </Label>
        );
      })}
    </Container>
  );
};
