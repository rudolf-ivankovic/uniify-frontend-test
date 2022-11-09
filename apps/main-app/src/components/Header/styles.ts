import styled from 'styled-components';

export const StyledHeader = styled('div')<{ headerColor?: string }>`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 4rem;
  background-color: ${(props) => props.headerColor ?? '#fff'};
  padding: 1rem;
`;
