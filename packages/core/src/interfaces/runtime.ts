import { Resolver } from './editor';
import { Nodes } from './nodes';

export type RuntimeContainerOptions = {
  onRender: React.ComponentType<{ render: React.ReactElement }>;
  resolver: Resolver;
};

export type RuntimeState = {
  runtime: boolean;
  nodes: Nodes;
  options: RuntimeContainerOptions;
};
