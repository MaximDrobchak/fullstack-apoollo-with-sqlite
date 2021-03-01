import React from 'react';
import { Route, Switch } from 'react-router';
import routesList from './routeList';
import { PostList } from './routeComponents';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={PostList} />
      {(routesList || []).map((item) => (
        <Route key={item.id} path={item.path} component={item.component} />
      ))}
    </Switch>
  );
};
export default Routes;
