import React from 'react';

import { DefaultRender } from './DefaultRender';

import { useInternalContainer } from '../container';
import { useInternalNode } from '../nodes/useInternalNode';

type RenderNodeToElementType = {
  render?: React.ReactElement;
};
export const RenderNodeToElement: React.FC<RenderNodeToElementType> = ({
  render,
}) => {
  const { hidden } = useInternalNode((node) => ({
    hidden: node.data.hidden,
  }));

  const { onRender } = useInternalContainer((state) => ({
    onRender: state.options.onRender,
  }));

  // don't display the node since it's hidden
  if (hidden) {
    return null;
  }

  return React.createElement(onRender, { render: render || <DefaultRender /> });
};
