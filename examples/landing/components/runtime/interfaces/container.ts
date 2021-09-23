import { Resolver } from '@craftjs/core';

import { Nodes } from './nodes';

export type Options = {
  onRender: React.ComponentType<{ render: React.ReactElement }>;
  resolver: Resolver;
};

export type RuntimeState = {
  nodes: Nodes;
  options: Options;
};
