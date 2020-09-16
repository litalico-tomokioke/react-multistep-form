import * as React from "react";
import styled from "@emotion/styled";

type Props = { onClick: () => void };

const Layout = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  display: block;
  width: 480px;
  max-width: 100%;
  height: 64px;
  font-size: 24px;
  color: #fff;
  background-color: #314c85;
  padding: 18px;
`;

const View: React.FC<Props> = ({ onClick }) => (
  <Layout>
    <Button type="button" onClick={onClick}>
      Next
    </Button>
  </Layout>
);

export default View;
