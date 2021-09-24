import { ERROR_RESOLVER_NOT_AN_OBJECT } from '@craftjs/utils';
import { pickBy } from 'lodash';
import React, { useEffect, useMemo } from 'react';
import invariant from 'tiny-invariant';

import { useRuntimeStore } from './runtime-store';

import { EditorContext } from '../editor';
import { RuntimeOptions } from '../interfaces';
import { EventHandlerContext } from '../events/EventContext';
import { noop } from './utils';
import { RuntimeRender } from './RuntimeRender';

/**
 * A React Component that provides the Editor context
 */
export const RuntimeContainer: React.FC<Partial<RuntimeOptions>> = ({
  children,
  data,
  resolver,
}) => {
  const context = useRuntimeStore({
    resolver,
    data,
    onRender: ({ render }) => <RuntimeRender />,
  });

  useEffect(() => {
    if (resolver) {
      context.actions.setOptions((editorOptions) => {
        Object.assign(editorOptions, { resolver });
      });
    }
  }, [resolver]);

  return context ? (
    <EditorContext.Provider value={context as any}>
      <EventHandlerContext.Provider
        value={{
          // @ts-ignore
          connectors: [
            'connect',
            'select',
            'hover',
            'drag',
            'drop',
            'create',
          ].reduce((prev, next) => {
            prev[next] = noop;
            return prev;
          }, {}),
        }}
      >
        {children}
      </EventHandlerContext.Provider>
    </EditorContext.Provider>
  ) : null;
};
