import React, { useEffect, useMemo } from 'react';
import {
  BrowserRouter,
  StaticRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { pickBy } from 'lodash';

import { RuntimeContainer } from './RuntimeContainer';
import { RuntimeFrame } from './RuntimeFrame';
import { noop } from './utils';
import { EditorContext } from '../editor';
import { EventHandlerContext } from '../events/EventContext';
import { Resolver, RuntimeData, SerializedNodes } from '../interfaces';
import { useRuntimeStore } from './runtime-store';

export interface RuntimeProps {
  data: RuntimeData;
  resolver: Resolver;
}

export const Runtime = ({ data, resolver }: RuntimeProps) => {
  const Router = typeof window === 'undefined' ? StaticRouter : BrowserRouter;

  return (
    <RuntimeContainer resolver={resolver} data={data}>
      <Router>
        <Switch>
          {data.appData.pages.map(({ name, nodes }, index) => (
            <Route
              path={[`/${name}`, index === 0 ? '/' : ''].filter(Boolean)}
              key={name}
            >
              <RuntimeFrame data={nodes} />
            </Route>
          ))}
        </Switch>
      </Router>
    </RuntimeContainer>
  );
};
