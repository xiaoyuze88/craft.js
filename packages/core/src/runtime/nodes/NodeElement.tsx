import React from 'react';

import { NodeProvider } from './NodeProvider';

import { RenderNodeToElement } from '../render/RenderNode';
import { NodeId } from '../../interfaces';

export type NodeElementProps = {
  id: NodeId;
  render?: React.ReactElement;
};

export const NodeElement: React.FC<NodeElementProps> = ({ id, render }) => {
  return (
    <NodeProvider id={id}>
      <RenderNodeToElement render={render}/>
    </NodeProvider>
  );
};
