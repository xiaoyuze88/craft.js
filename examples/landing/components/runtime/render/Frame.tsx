import { SerializedNodes } from '@craftjs/core';
import { deprecationWarning, ROOT_NODE } from '@craftjs/utils';
import React, { useEffect, useState, useRef } from 'react';

import { NodeProvider } from '../nodes';
import { useInternalContainer } from '../container';
import { NodeElement } from '../nodes';

export type Frame = {
  data?: string | SerializedNodes;
};

/**
 * A React Component that defines the editable area
 */
export const Frame: React.FC<Frame> = ({ data }) => {
  const { actions } = useInternalContainer();

  useEffect(() => {
    console.log('data', data);
    actions.deserialize(data, NodeProvider);
  }, [actions, data]);

  return <NodeElement id={ROOT_NODE}/>;
};
