// import {
//   SerializedNodes,
//   Resolver,
// } from '@craftjs/core';
import React, { useEffect, useState, useRef, useMemo } from 'react';

import { Frame } from './render';

import { Container } from './container';
import { Resolver, SerializedNodes } from '../interfaces';
// import { useInternalEditor } from '../editor/useInternalEditor';
// import { NodeElement } from '../nodes/NodeElement';

export type Runtime = {
  data?: string | SerializedNodes;
};

export interface PageStateVariable {
  dataType: 'boolean' | 'string' | 'number' | 'array' | 'object';
  initValue: any;
}

export type DataState = Record<string, PageStateVariable>;

export interface PageDefine {
  name: string;
  nodes: SerializedNodes[];
  state: DataState;
}

export interface RuntimeData {
  productId: string;
  appData: {
    state: DataState;
    pages: PageDefine[];
  };
}

export interface RuntimeProps {
  data: RuntimeData;
  resolver: Resolver;
}

export const Runtime = ({ data, resolver }: RuntimeProps) => {
  // const { actions, query } = useInternalEditor();
  // const [render, setRender] = useState<React.ReactElement | null>(null);

  return (
    <Container resolver={resolver}>
      <Frame data={data.appData.pages[0].nodes} />
    </Container>
  );
};
