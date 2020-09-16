import * as React from "react";
import styled from "@emotion/styled";

type Props = { isLastStep: boolean; onClick: () => void };

const Layout = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button<{ isSubmit?: boolean }>`
  display: block;
  width: 480px;
  max-width: 100%;
  height: 64px;
  font-size: 24px;
  color: #fff;
  background-color: ${(props) => (props.isSubmit ? "#ff5966" : "#314c85")};
  padding: 18px;
`;

const View: React.FC<Props> = ({ isLastStep, onClick }) => (
  <Layout>
    {isLastStep ? (
      <Button type="submit" isSubmit>
        Submit
      </Button>
    ) : (
      <Button type="button" onClick={onClick}>
        Next
      </Button>
    )}
  </Layout>
);

export default View;
