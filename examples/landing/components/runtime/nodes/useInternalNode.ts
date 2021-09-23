import { NodeContext, NodeContextType, Node } from '@craftjs/core';
import { ERROR_USE_NODE_OUTSIDE_OF_EDITOR_CONTEXT } from '@craftjs/utils';
import { useMemo, useContext } from 'react';
import invariant from 'tiny-invariant';

import { useInternalContainer } from '../container';

type internalActions = NodeContextType & {
  inNodeContext: boolean;
  actions: {
    setProp: (cb: (props: any) => void, throttleRate?: number) => void;
    setCustom: (cb: (custom: any) => void, throttleRate?: number) => void;
    setHidden: (bool: boolean) => void;
  };
};

// TODO: Deprecate useInternalNode in favor of useNode
export type useInternalNodeReturnType<S = null> = S extends null
  ? internalActions
  : S & internalActions;

export function useInternalNode(): useInternalNodeReturnType;
export function useInternalNode<S = null>(
  collect?: (node: Node) => S
): useInternalNodeReturnType<S>;
export function useInternalNode<S = null>(
  collect?: (node: Node) => S
): useInternalNodeReturnType<S> {
  const context = useContext(NodeContext);
  invariant(context, ERROR_USE_NODE_OUTSIDE_OF_EDITOR_CONTEXT);

  const { id, related, connectors } = context;

  const { actions: EditorActions, query, ...collected } = useInternalContainer(
    (state) => {
      console.log('use internal node, collect result: ', id, JSON.stringify(id && state.nodes[id] && collect && collect(state.nodes[id])));
      return id && state.nodes[id] && collect && collect(state.nodes[id]);
    }
  );

  const actions = useMemo(() => {
    return {
      setProp: (cb: any) => {
        EditorActions.setProp(id, cb);
      },
      setCustom: (cb: any) => {
        EditorActions.setCustom(id, cb);
      },
      setHidden: (bool: boolean) => EditorActions.setHidden(id, bool),
    };
  }, [EditorActions, id]);

  return {
    ...(collected as any),
    id,
    related,
    inNodeContext: !!context,
    actions,
    connectors,
  };
}
