// import { NodeContext, NodeContextType } from '@craftjs/core';
import React from 'react';

import { noop } from '../utils';
import { NodeContext, NodeContextType } from '../../nodes';

export type NodeProviderProps = Omit<NodeContextType, 'connectors'>;

export const NodeProvider: React.FC<NodeProviderProps> = ({
  id,
  related = false,
  children,
}) => {
  const connectors: any = {
    connect: noop,
    drag: noop,
  };

  return (
    <NodeContext.Provider value={{ id, related, connectors }}>
      {children}
    </NodeContext.Provider>
  );
};
