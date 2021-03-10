import {BasicConfig} from '@idelic/safety-suite-api/lib/config';
import {createContext, useContext} from 'react';

export interface ConfigContext {
  config: BasicConfig;
  customerAlias: string;
  configServiceUrl: string;
}
const configContext = createContext<ConfigContext>({
  configServiceUrl: '',
  customerAlias: '',
  config: {} as BasicConfig
});

export const useConfig = (): ConfigContext => useContext(configContext);
export const ConfigProvider = configContext.Provider;
