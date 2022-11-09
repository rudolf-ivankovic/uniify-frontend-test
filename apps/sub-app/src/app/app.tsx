import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  height: 100vh;
  width: 100vw;
`;

export function App() {
  return <StyledApp>Hello World</StyledApp>;
}

export default App;
