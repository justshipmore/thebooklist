import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import ExplorePage from '@/pages/explore';
import ErrorPage from '@pages/error';
import ListsPage from '@pages/lists';
import ListPage from '@pages/list';

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<ExplorePage />} />
      <Route path=":userId" element={<ListsPage />} />
      <Route path=":userId/lists/:listId" element={<ListPage />} />
    </Route>
  ])
);

export default router;
