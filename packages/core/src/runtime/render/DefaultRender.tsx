import React, { useMemo } from 'react';

import { SimpleElement } from './SimpleElement';

import { NodeElement } from '../nodes';
import { useInternalNode } from '../nodes/useInternalNode';
import { NodeId } from '../../../lib/interfaces';

export const DefaultRender = () => {
  const { type, props, nodes, hydrationTimestamp } = useInternalNode(
    (node) => ({
      type: node.data.type,
      props: node.data.props,
      nodes: node.data.nodes,
      hydrationTimestamp: node._hydrationTimestamp,
    }),
  );

  console.log({ type, props, nodes });

  return useMemo(() => {
    if (props) {
      let children = props.children;

      if (nodes && nodes.length > 0) {
        children = (
          <React.Fragment>
            {nodes.map((id: NodeId) => (
              <NodeElement id={id} key={id}/>
            ))}
          </React.Fragment>
        );
      }

      const render = React.createElement(type, props, children);

      if (typeof type == 'string') {
        return <SimpleElement render={render}/>;
      }

      return render;
    }

    return null;
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [type, props, hydrationTimestamp, nodes]);
};
