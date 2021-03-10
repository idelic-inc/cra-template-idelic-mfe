import styled from '@emotion/styled';
import {Text, ThemeProvider} from '@fluentui/react';
import {FunctionComponent} from 'react';

import {safetySuiteTheme} from './theme';

const Root = styled(ThemeProvider)({
  height: '100%'
});
const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
});
const Code = styled.code({
  backgroundColor: '#9baee140',
  fontFamily:
    'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace'
});

export const App: FunctionComponent = () => (
  <Root theme={safetySuiteTheme}>
    <Container>
      <img
        alt='Idelic Shield Logo'
        src={`${process.env.PUBLIC_URL}/logo512.png`}
      />
      <Text>
        Edit <Code>src/App.tsx</Code> and save to reload.
      </Text>
    </Container>
  </Root>
);
