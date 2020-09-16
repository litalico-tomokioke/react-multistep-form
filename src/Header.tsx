import * as React from "react";
import styled from "@emotion/styled";

const View = styled.header`
  border-top: solid 4px #e22faa;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  > span {
    display: block;
    font-size: 18px;
    font-weight: bold;
  }
`;

export default () => (
  <View>
    <span>React Multi Step Form</span>
  </View>
);
