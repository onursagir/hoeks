import * as React from 'react';
import * as ReactDom from 'react-dom';
import routes from '../packages/*/tests/e2e/routes.tsx';
import { Link, RouteComponentProps, Router } from '@reach/router';

const Home: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <>
      <h1>E2E Routes overview</h1>
      {Object.entries(routes).map(([packageName, routeObject]: [string, any]) => {
        return (
          <div key={packageName}>
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

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Home path="/" />
      {Object.values(routes).map((routeObject: any) => {
        return Object.entries(routeObject.default).map(([path, Component]: [string, any]) => {
          return <Component key={path} path={path} />;
        });
      })}
    </Router>
  );
};

ReactDom.render(<App />, document.getElementById('app'));
