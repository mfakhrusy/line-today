import { Route, Switch } from 'react-router-dom';
import BookmarkScreen from 'screens/bookmark/BookmarkScreen';
import HomeScreen from 'screens/home/HomeScreen';

function Router() {
  return (
    <Switch>
      <Route path="/bookmark">
        <BookmarkScreen />
      </Route>
      <Route path="/">
        <HomeScreen />
      </Route>
    </Switch>
  );
}

export default Router;
