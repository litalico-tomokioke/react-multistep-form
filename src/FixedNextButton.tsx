import * as React from "react";
import styled from "@emotion/styled";

const Layout = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const View = styled.button`
  display: block;
  width: 480px;
  max-width: 100%;
  height: 64px;
  font-size: 24px;
  color: #fff;
  background-color: #314c85;
  padding: 18px;
`;

export default () => (
  <Layout>
    <View type="button">Next</View>
  </Layout>
);
