/// <reference types="vite/client" />

//This declaration tells TypeScript that any import ending in .svg?react is a module that exports a React component.
declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  export default ReactComponent;
}
