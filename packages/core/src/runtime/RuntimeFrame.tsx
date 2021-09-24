import { deprecationWarning, ROOT_NODE } from '@craftjs/utils';
import React, { useEffect, useState, useRef } from 'react';

import { NodeProvider } from '../nodes';
import { NodeElement } from '../nodes';
import { SerializedNodes } from '../interfaces';
import { useInternalEditor } from '../editor/useInternalEditor';

export type RuntimeFrame = {
  data?: string | SerializedNodes;
};

/**
 * A React Component that defines the editable area
 */
export const RuntimeFrame: React.FC<RuntimeFrame> = ({ data }) => {
  const { actions } = useInternalEditor();

  useEffect(() => {
    actions.deserialize(data, NodeProvider);
  }, [actions, data]);

  return <NodeElement id={ROOT_NODE} />;
};
