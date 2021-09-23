import { Overwrite, Delete, OverwriteFnReturnType } from '@craftjs/utils';
import { useMemo } from 'react';

import {
  useInternalContainer,
  RuntimeCollector,
  useInternalContainerReturnType,
} from '../container';

type PrivateActions =
  | 'addLinkedNodeFromTree'
  | 'setNodeEvent'
  | 'setDOM'
  | 'replaceNodes'
  | 'reset';

const getPublicActions = (actions) => {
  const {
    addLinkedNodeFromTree,
    setDOM,
    setNodeEvent,
    replaceNodes,
    reset,
    ...EditorActions
  } = actions;

  return EditorActions;
};

export type WithoutPrivateActions<S = null> = Delete<
  useInternalContainerReturnType<S>['actions'],
  PrivateActions | 'history'
> & {
  history: Overwrite<
    useInternalContainerReturnType<S>['actions']['history'],
    {
      ignore: OverwriteFnReturnType<
        useInternalContainerReturnType<S>['actions']['history']['ignore'],
        PrivateActions
      >;
      throttle: OverwriteFnReturnType<
        useInternalContainerReturnType<S>['actions']['history']['throttle'],
        PrivateActions
      >;
    }
  >;
};

export type useEditorReturnType<S = null> = Overwrite<
  useInternalContainerReturnType<S>,
  {
    actions: WithoutPrivateActions;
    query: Delete<useInternalContainerReturnType<S>['query'], 'deserialize'>;
  }
>;

/**
 * A Hook that that provides methods and information related to the entire editor state.
 * @param collector Collector function to consume values from the editor's state
 */
export function useEditor(): useEditorReturnType;
export function useEditor<S>(
  collect: RuntimeCollector<S>
): useEditorReturnType<S>;

export function useEditor<S>(collect?: any): useEditorReturnType<S> {
  const {
    connectors,
    actions: internalActions,
    query: { deserialize, ...query },
    store,
    ...collected
  } = useInternalContainer(collect);

  const EditorActions = getPublicActions(internalActions);

  const actions = useMemo(() => {
    return {
      ...EditorActions,
      // history: {
      //   ...EditorActions.history,
      //   ignore: (...args) =>
      //     getPublicActions(EditorActions.history.ignore(...args)),
      //   throttle: (...args) =>
      //     getPublicActions(EditorActions.history.throttle(...args)),
      // },
    };
  }, [EditorActions]);

  return {
    connectors,
    actions,
    query,
    store,
    ...(collected as any),
  };
}
