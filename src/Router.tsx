import { Route, Switch } from 'react-router-dom';
import HomeScreen from 'screens/home/HomeScreen';

function Router() {
  return (
    <Switch>
      <Route path="/login">
        login
      </Route>
      <Route path="/bookmark">
        bookmark
      </Route>
      <Route path="/">
        <HomeScreen />
      </Route>
    </Switch>
  );
}

export default Router;
