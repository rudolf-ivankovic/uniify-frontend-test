import styled from 'styled-components';

export const StyledSteps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

export const StyledStepDots = styled('div')<{ checked?: boolean }>`
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${(props) => (props.checked ? '#6eb6e0' : '#ffffff')};
  border: black;
  cursor: pointer;
`;

export const StyledStepContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledIframeContent = styled.iframe`
  border: none;
`;
