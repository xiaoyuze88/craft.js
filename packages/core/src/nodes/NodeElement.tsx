import React, { FC, memo } from 'react';

import { NodeProvider } from './NodeContext';

import { NodeId } from '../interfaces';
import { RenderNodeToElement } from '../render/RenderNode';

export type NodeElement = {
  id: NodeId;
};

export const NodeElement: FC<NodeElement> = memo(({ id }) => {
  return (
    <NodeProvider id={id}>
      <RenderNodeToElement />
    </NodeProvider>
  );
});
