import * as React from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import FixedNextButton from "./FixedNextButton";
import BackButton from "./BackButton";
import useStepManager, { StepManager } from "./lib/useStepManager";
import { FormContextProvider } from "./FormContext";
import {
  ColorForm,
  InterestsForm,
  NameForm,
  TelForm,
  EmailForm,
} from "./stepContent";

const MAX_STEP = 5 as const;
type Props = { maxStep: number } & StepManager;

const Root = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  height: calc(100vh + 128px);
  margin: 0 auto;
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

const SlotStepContent: React.FC<{ step: number }> = ({ step }) => {
  switch (step) {
    case 1:
      return <ColorForm />;
    case 2:
      return <InterestsForm />;
    case 3:
      return <NameForm />;
    case 4:
      return <TelForm />;
    case 5:
      return <EmailForm />;
    default:
      return null;
  }
};

const View: React.FC<Props> = ({ maxStep, step, isLastStep, next, back }) => (
  <Root>
    <Header />
    <ProgressLayout>
      {step > 1 && <BackButton onClick={back} />}
      <ProgressBar maxStep={maxStep} step={step} />
    </ProgressLayout>
    <SlotStepContent step={step} />
    <FixedNextButton isLastStep={isLastStep} onClick={next} />
  </Root>
);

export default () => {
  const stepManager = useStepManager(MAX_STEP);

  return (
    <FormContextProvider>
      <View {...stepManager} maxStep={MAX_STEP} />
    </FormContextProvider>
  );
};
