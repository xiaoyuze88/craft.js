import { Action, QueryCallbacksFor } from '@craftjs/utils';
import produce from 'immer';
import { useMemo, useReducer } from 'react';

import { noop } from './utils';

import { ActionMethods, QueryMethods } from '../editor';
import {
  RuntimeState,
  RuntimeOptions,
  DataState,
  PageDefine,
} from '../interfaces';

export const editorInitialState: RuntimeState = {
  runtime: true,
  nodes: {},
  options: {
    onRender: ({ render }) => render,
    resolver: {},
    data: {
      productId: '',
      appData: {
        dataset: {},
        pages: [],
      },
    },
  },
  dataset: {},
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
  query: Omit<QueryCallbacksFor<typeof QueryMethods>, 'history'>
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
  } = ActionMethods(state as any, query as any);

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

const reduceFunction = (state, action: Action) => {
  console.log('reducer prev => ', state);
  console.log('reducer action => ', action);

  const query = QueryMethods(state);

  const methods = ActionMethodsFactory(state, query);

  if (methods[action.type]) {
    methods[action.type](...action.payload);
  }

  console.log('reducer after => ', state);

  return state;
  // return { ...state };
};

export const useRuntimeStore = (
  options: Partial<RuntimeOptions>
): RuntimeStore => {
  const [state, dispatch] = useReducer(
    produce(reduceFunction),
    options.data,
    (data) => {
      const initState = {
        ...editorInitialState,
        options: {
          ...editorInitialState.options,
          ...options,
        },
      };

      Object.keys(data.appData.dataset).forEach((key) => {
        const { dataType, initValue } = data.appData.dataset[key];

        initState.dataset[key] = initValue;
      });

      return initState;
    }
  );

  // const onChangeRef = useRef<any>(noop);
  // const collectorRef = useRef<any>(noop);
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

  // const onRender = () => {
  //   onChangeRef.current(collectorRef.current(state));
  // };
  //
  // onRender();

  return useMemo(
    () => ({
      actions,
      query,
      state,
      getState: () => state,
      subscribe: () => noop,
    }),
    [actions, query, state]
  );
};
