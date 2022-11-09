import { StepDetail } from '../../types';
import { useState } from 'react';
import {
  StyledIframeContent,
  StyledStepContent,
  StyledStepDots,
  StyledSteps,
} from './styles';
import { environment } from '@environments';

type StepsProps = {
  steps?: StepDetail[];
};

const Steps = ({ steps }: StepsProps) => {
  const [currentStep, setCurrentStep] = useState(2);
  return (
    <>
      <StyledSteps>
        {steps?.map((step, index) => (
          <StyledStepDots
            checked={index < currentStep}
            onClick={() => setCurrentStep(index + 1)}
            key={index}
          />
        ))}
      </StyledSteps>
      <StyledStepContent>
        <StyledIframeContent
          id="sub-app"
          src={environment.contentIframe}
          width="500"
          height="500"
        ></StyledIframeContent>
      </StyledStepContent>
    </>
  );
};

export default Steps;
