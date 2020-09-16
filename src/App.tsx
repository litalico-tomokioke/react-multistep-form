import * as React from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import FixedNextButton from "./FixedNextButton";
import BackButton from "./BackButton";
import useStepManager, { StepManager } from "./lib/useStepManager";

const MAX_STEP = 5 as const;
type Props = { maxStep: number } & StepManager;

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

const View: React.FC<Props> = ({ maxStep, step, isLastStep, next, back }) => (
  <Root>
    <Header />
    <ProgressLayout>
      {step > 1 && <BackButton onClick={back} />}
      <ProgressBar maxStep={maxStep} step={step} />
    </ProgressLayout>
    <FixedNextButton onClick={next} />
  </Root>
);

export default () => {
  const stepManager = useStepManager(MAX_STEP);

  return <View {...stepManager} maxStep={MAX_STEP} />;
};
