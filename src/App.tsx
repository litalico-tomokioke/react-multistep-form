import * as React from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import FixedNextButton from "./FixedNextButton";

const Root = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const ProgressBarLayout = styled.div`
  width: 100%;
  margin: 12px 0;
  display: flex;
  justify-content: center;
`;

export default () => (
  <Root>
    <Header />
    <ProgressBarLayout>
      <ProgressBar />
    </ProgressBarLayout>
    <FixedNextButton />
  </Root>
);
