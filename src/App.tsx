import * as React from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import FixedNextButton from "./FixedNextButton";
import BackButton from "./BackButton";

const Root = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const ProgressLayout = styled.div`
  position: relative;
  width: 480px;
  max-width: 100%;
  height: 32px;
  margin: 12px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <Root>
    <Header />
    <ProgressLayout>
      <BackButton />
      <ProgressBar />
    </ProgressLayout>
    <FixedNextButton />
  </Root>
);
