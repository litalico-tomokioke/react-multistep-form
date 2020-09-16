import * as React from "react";
import styled from "@emotion/styled";

const Circle = styled.button`
  position: absolute;
  top: 0;
  left: 12px;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: solid 3px #314c85;
  background-color: #fff;
  vertical-align: middle;
  text-align: center;
`;

const Arrow = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #314c85;
`;

const View = () => {
  return (
    <Circle>
      <Arrow>&lt;</Arrow>
    </Circle>
  );
};

export default () => <View />;
