import * as React from 'react';
import routes from '../packages/*/tests/e2e/routes.tsx';
import { render } from 'react-dom';
import { Router } from '@reach/router';

render(
  <Router>
    {Object.values(routes).map((routeObject: any) => {
      return Object.entries(routeObject.default).map(([path, Component]: [string, any]) => {
        return <Component path={path} />;
      });
    })}
  </Router>,
  document.getElementById('app')
);
