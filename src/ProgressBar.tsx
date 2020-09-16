import * as React from "react";
import styled from "@emotion/styled";

type Props = {
  step: number;
  maxStep: number;
};

const Bar = styled.div`
  width: 480px;
  max-width: 60%;
  height: 12px;
  border-radius: 12px;
  border: solid 1px #dcdee0;
`;

const Progress = styled.div<Props>`
  border-radius: 12px;
  background-color: #e22faa;
  width: ${(props) => (props.step * 100) / props.maxStep}%;
  height: 100%;
`;

const View: React.FC<Props> = ({ step, maxStep }) => {
  return (
    <Bar>
      <Progress step={step} maxStep={maxStep} />
    </Bar>
  );
};

export default () => {
  return <View step={1} maxStep={5} />;
};
