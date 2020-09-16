import * as React from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import ProgressBar from "./ProgressBar";

const ProgressBarLayout = styled.div`
  width: 100%;
  margin: 12px 0;
  display: flex;
  justify-content: center;
`;

export default () => (
  <>
    <Header />
    <ProgressBarLayout>
      <ProgressBar />
    </ProgressBarLayout>
  </>
);
