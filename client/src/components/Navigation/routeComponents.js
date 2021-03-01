import Loading from '../Loading';
import Loadable from 'react-loadable';

export const PostList = Loadable({
  loader: () => import('../PostList'),
  loading: () => <Loading />,
});
