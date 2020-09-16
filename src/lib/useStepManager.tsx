import * as React from "react";

export type StepManager = {
  step: number;
  isLastStep: boolean;
  next: () => void;
  back: () => void;
};

export default (maxStep: number): StepManager => {
  const [step, setStep] = React.useState(1);
  const [isLastStep, setIsLastStep] = React.useState(false);

  const next = React.useCallback(() => {
    setStep((step) => {
      return step <= maxStep ? step + 1 : step;
    });
  }, []);

  const back = React.useCallback(() => {
    setStep((step) => {
      return step >= 1 ? step - 1 : step;
    });
  }, []);

  React.useEffect(() => {
    setIsLastStep(step === maxStep);
  }, [step, maxStep]);

  return { step, isLastStep, next, back };
};
