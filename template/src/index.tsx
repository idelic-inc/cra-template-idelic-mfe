import {Text} from '@fluentui/react';
import {
  initializeConfig,
  isConfig,
  NestedConfiguration,
  setAccessToken
} from '@idelic/safety-suite-api';
import {History} from 'history';
import {render, unmountComponentAtNode} from 'react-dom';
import {Router} from 'react-router-dom';

import {App} from './App';
import {RootContextProvider} from './context';

interface FrontendService {
  render: (info: {
    container: Element;
    config: NestedConfiguration;
    history: History;
    configServiceUrl: string;
    accessToken: string;
    customerAlias: string;
  }) => void;
  unmount: (container: Element) => void;
}

declare global {
  interface Window {
    services?: Record<string, FrontendService>;
  }
}
if (window.services) {
  window.services.mfe_name = {
    render: ({
      container,
      config,
      history,
      configServiceUrl,
      accessToken,
      customerAlias
    }) => {
      initializeConfig(configServiceUrl, config);
      setAccessToken(accessToken);
      if (!isConfig(config)) {
        throw new Error('Invalid config!');
      }
      render(
        <RootContextProvider
          configContext={{config, configServiceUrl, customerAlias}}
        >
          <Router history={history}>
            <App />
          </Router>
        </RootContextProvider>,
        container
      );
    },
    unmount: (container) => {
      unmountComponentAtNode(container);
    }
  };
} else {
  render(
    <Text>
      This is a micro-frontend that should be rendered within Safety Suite!
    </Text>,
    document.querySelector('#root')
  );
}
