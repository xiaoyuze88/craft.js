import { EditorContext } from '@craftjs/core';
import { ERROR_RESOLVER_NOT_AN_OBJECT } from '@craftjs/utils';
import { pickBy } from 'lodash';
import React, { useEffect, useMemo } from 'react';
import invariant from 'tiny-invariant';

import { useRuntimeStore } from './store';

import { Options } from '../interfaces';

/**
 * A React Component that provides the Editor context
 */
export const Container: React.FC<Partial<Options>> = ({
  children,
  onRender,
  resolver,
}) => {
  // we do not want to warn the user if no resolver was supplied
  if (resolver !== undefined) {
    invariant(
      typeof resolver === 'object' && !Array.isArray(resolver),
      ERROR_RESOLVER_NOT_AN_OBJECT
    );
  }

  const options = useMemo(() => {
    return pickBy({ onRender, resolver }, (value) => value !== undefined);
  }, [onRender, resolver]);

  const context = useRuntimeStore(options);

  useEffect(() => {
    if (options) {
      context.actions.setOptions((editorOptions) => {
        Object.assign(editorOptions, options);
      });
    }
  }, [options]);

  return context ? (
    <EditorContext.Provider value={context as any}>
      {children}
    </EditorContext.Provider>
  ) : null;
};
