import * as React from 'react';
import routes from '../packages/*/tests/e2e/routes.tsx';
import { render } from 'react-dom';
import { Link, Router } from '@reach/router';

const Home: React.FunctionComponent = () => {
  return (
    <>
      <h1>E2E Routes overview</h1>
      {Object.entries(routes).map(([packageName, routeObject]: [string, any]) => {
        return (
          <div>
            <h3>{packageName}</h3>
            <ul>
              {Object.keys(routeObject.default).map((route) => {
                return (
                  <li key={route}>
                    <Link to={route}>{route}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

render(
  <Router>
    <Home path="/" />
    {Object.values(routes).map((routeObject: any) => {
      return Object.entries(routeObject.default).map(([path, Component]: [string, any]) => {
        return <Component path={path} />;
      });
    })}
  </Router>,
  document.getElementById('app')
);
