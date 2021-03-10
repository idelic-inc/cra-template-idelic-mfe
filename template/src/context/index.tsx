import {FunctionComponent} from 'react';

import {ConfigContext, ConfigProvider} from './config';

export interface RootContextProviderProps {
  configContext: ConfigContext;
}

/**
 * Any global context providers should be added to this component
 */
export const RootContextProvider: FunctionComponent<RootContextProviderProps> = ({
  children,
  configContext
}) => <ConfigProvider value={configContext}>{children}</ConfigProvider>;
