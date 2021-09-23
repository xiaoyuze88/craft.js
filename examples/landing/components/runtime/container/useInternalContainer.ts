import { EditorContext, QueryMethods } from '@craftjs/core';
import {
  QueryCallbacksFor,
  ERROR_USE_EDITOR_OUTSIDE_OF_EDITOR_CONTEXT,
} from '@craftjs/utils';
import { useContext } from 'react';
import invariant from 'tiny-invariant';

import { RuntimeStore } from './store';
import { useCollectorReturnType, useCollector } from './useCollector';

import { RuntimeState } from '../interfaces';
import { noop } from '../utils';

export type RuntimeCollector<C> = (
  state: RuntimeState,
  query: QueryCallbacksFor<typeof QueryMethods>
) => C;

export type useInternalContainerReturnType<C = null> = useCollectorReturnType<
  RuntimeStore,
  C
> & {
  inContext: boolean;
  store: RuntimeStore;
};

export function useInternalContainer<C>(
  collector?: RuntimeCollector<C>
): useInternalContainerReturnType<C> {
  // @ts-ignore
  const store: RuntimeStore = useContext(EditorContext);
  invariant(store, ERROR_USE_EDITOR_OUTSIDE_OF_EDITOR_CONTEXT);

  // const collected = useCollector(store, collector);

  const { state, actions, query } = store;

  const onCollect = (collected) => ({ ...collected, actions, query });

  const collected = onCollect(collector ? collector(state, query) : null);

  // console.log('userInternalContainer', {
  //   ...collected,
  //   inContext: !!store,
  //   store,
  // });

  return {
    ...collected,
    connectors: {
      select: noop,
      hover: noop,
      drag: noop,
      create: noop,
    },
    inContext: !!store,
    store,
  };
}
