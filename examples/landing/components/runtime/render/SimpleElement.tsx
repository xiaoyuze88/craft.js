import React from 'react';

import { useNode } from '../hooks';

export const SimpleElement = ({ render }: any) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return typeof render.type === 'string'
    ? connect(drag(React.cloneElement(render)))
    : render;
};
