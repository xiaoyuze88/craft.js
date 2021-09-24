import React, { useMemo } from 'react';

import { useInternalEditor } from '../editor/useInternalEditor';
import { NodeId } from '../interfaces';
import { NodeElement } from '../nodes/NodeElement';
import { useInternalNode } from '../nodes/useInternalNode';
import { SimpleElement } from '../render/SimpleElement';

export const RuntimeRender = () => {
  const { dataset, actions } = useInternalEditor((state: any) => ({
    dataset: state.dataset,
  }));
  const {
    id,
    type,
    props = {},
    nodes,
    hydrationTimestamp,
    listeners = [],
  } = useInternalNode((node) => ({
    id: node.id,
    type: node.data.type,
    props: node.data.props,
    nodes: node.data.nodes,
    listeners: node.data.custom.listeners,
    hydrationTimestamp: node._hydrationTimestamp,
  }));

  return useMemo(() => {
    if (!type) return null;

    let children = props.children;

    if (nodes && nodes.length > 0) {
      children = (
        <React.Fragment>
          {nodes.map((id: NodeId) => (
            <NodeElement id={id} key={id} />
          ))}
        </React.Fragment>
      );
    }

    const dynamicProps = {};
    const dynamicPropKey = Object.keys(props).filter((key) =>
      key.startsWith(':')
    );
    const events = {};

    listeners.forEach((listener) => {
      const { eventName, handler } = listener;

      events[eventName] = (...params) => {
        actions.setState((state, actions) => {
          state.dataset.loading = false;
        });

        console.log('event triggered', eventName, params, handler);
      };
    });

    dynamicPropKey.forEach((key) => {
      const varPathArr = props[key].split('.');
      const actualKey = key.substring(1);

      if (varPathArr[0] === '$app' && varPathArr[1] === 'dataset') {
        dynamicProps[actualKey] = dataset[varPathArr[2]];
      }
    });

    console.log(
      'node rendered',
      id,
      {
        ...props,
        ...dynamicProps,
        events,
      },
      dataset
    );

    const render = React.createElement(
      type,
      {
        ...props,
        ...dynamicProps,
        events,
      },
      children
    );

    if (typeof type == 'string') {
      return <SimpleElement render={render} />;
    }

    return render;
  }, [type, props, nodes, listeners, dataset, hydrationTimestamp]);
};
