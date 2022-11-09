import styled from 'styled-components';
import { useAxios } from '@uniify-poc/hooks';
import { useCallback, useEffect, useState } from 'react';
import { MainConfig } from '../types';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';
import Steps from '../components/Steps';
import { environment } from '@environments';

const StyledApp = styled.div`
  height: 100vh;
  background: #f0f0f0;
`;

export function App() {
  const axios = useAxios(environment.baseApiUrl);
  const [config, setConfig] = useState<MainConfig>();
  const configTheme = config?.theme;
  const getConfig = useCallback(async () => {
    try {
      const res = await axios.get('/frontend/s9zjgfj7au/config');
      setConfig(res.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getConfig();
  }, []);

  return (
    <StyledApp>
      <style>{config?.theme?.css}</style>
      {!!configTheme?.favicon && (
        <Helmet>
          <link rel="icon" type="image/x-icon" href={configTheme.favicon} />
        </Helmet>
      )}
      <Header {...configTheme} />
      <Steps steps={config?.steps} />
    </StyledApp>
  );
}

export default App;
