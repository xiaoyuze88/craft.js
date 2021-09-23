import { ActionMethods, EditorState, QueryMethods } from '@craftjs/core';
import { Action, QueryCallbacksFor } from '@craftjs/utils';
import { useMemo, useReducer } from 'react';

import { RuntimeState, Options } from '../interfaces';
import { noop } from '../utils';

export const editorInitialState: RuntimeState = {
  nodes: {},
  options: {
    onRender: ({ render }) => render,
    resolver: {},
  },
};

export const ActionMethodsWithConfig = {
  methods: ActionMethods,
  ignoreHistoryForActions: [
    'setDOM',
    'setNodeEvent',
    'selectNode',
    'clearEvents',
    'setOptions',
    'setIndicator',
  ] as const,
};

// export type RuntimeActions = Pick<typeof ActionMethods,
//   // @ts-ignore
//   | 'deserialize'
//   | 'replaceNodes'
//   | 'reset'
//   | 'setOptions'
//   | 'setCustom'
//   | 'setHidden'
//   | 'setProp'
//   | 'setState'>;

export type RuntimeStore = {
  state: RuntimeState;
  actions: any;
  query: any;
  getState: () => RuntimeState;
  subscribe: any;
};

const ActionMethodsFactory = (
  state: RuntimeState,
  query: Omit<QueryCallbacksFor<typeof QueryMethods>, 'history'>,
) => {
  const {
    deserialize,
    replaceNodes,
    reset,
    setOptions,
    setCustom,
    setHidden,
    setProp,
    setState,
  } = ActionMethods(state as EditorState, query as any);

  return {
    deserialize,
    replaceNodes,
    reset,
    setOptions,
    setCustom,
    setHidden,
    setProp,
    setState,
    clearEvents: noop,
  };
};

export const useRuntimeStore = (options: Partial<Options>): RuntimeStore => {
  const [state, dispatch] = useReducer(
    (state, action: Action) => {
      console.log('reducer prev => ', state);
      console.log('reducer action => ', action);

      const query = QueryMethods(state);

      const methods = ActionMethodsFactory(state, query);

      if (methods[action.type]) {
        methods[action.type](...action.payload);
      }

      console.log('reducer after => ', state);

      // return state;
      return { ...state };
    },
    {
      ...editorInitialState,
      options: {
        ...editorInitialState.options,
        ...options,
      },
    },
  );

  const query = useMemo(() => QueryMethods(state), [state]);

  const actions = useMemo(() => {
    const actionTypes = Object.keys(ActionMethodsFactory(null, null));

    return {
      ...actionTypes.reduce((accum, type) => {
        accum[type] = (...payload) => dispatch({ type, payload });
        return accum;
      }, {} as any),
    };
  }, []);

  return {
    actions,
    query,
    state,
    getState: () => state,
    subscribe: () => noop,
  };
};
