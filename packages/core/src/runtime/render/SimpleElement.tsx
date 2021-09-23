import React from 'react';

export const SimpleElement = ({ render }: any) => {
  return typeof render.type === 'string' ? React.cloneElement(render) : render;
};
