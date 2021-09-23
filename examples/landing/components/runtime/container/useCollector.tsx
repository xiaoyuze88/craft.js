import { ConditionallyMergeRecordTypes } from '@craftjs/utils';

import { RuntimeStore } from './store';
import { RuntimeCollector } from './useInternalContainer';

type CollectorMethods<S extends RuntimeStore> = {
  actions: S['actions'];
  query: S['query'];
};

export type useCollectorReturnType<
  S extends RuntimeStore,
  C = null
> = ConditionallyMergeRecordTypes<C, CollectorMethods<S>>;

export function useCollector<S extends RuntimeStore, C>(
  store: S,
  collector?: RuntimeCollector<C>
): useCollectorReturnType<S, C> {
  const { state, actions, query } = store;

  const onCollect = (collected) => ({ ...collected, actions, query });

  return onCollect(collector ? collector(state, query) : null);
}
