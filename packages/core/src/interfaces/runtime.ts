import { Resolver } from './editor';
import { Nodes, SerializedNodes } from './nodes';

export type RuntimeOptions = {
  onRender: React.ComponentType<{ render: React.ReactElement }>;
  resolver: Resolver;
  data: RuntimeData;
};

export type RuntimeState = {
  runtime: boolean;
  nodes: Nodes;
  options: RuntimeOptions;
  dataset: Record<any, any>;
};

export interface PageStateVariable {
  dataType: 'boolean' | 'string' | 'number' | 'array' | 'object';
  initValue: any;
}

export type Dataset = Record<string, PageStateVariable>;

export interface PageDefine {
  name: string;
  nodes: SerializedNodes;
  dataset: Dataset;
}

export interface RuntimeData {
  productId: string;
  appData: {
    dataset: Dataset;
    pages: PageDefine[];
  };
}
