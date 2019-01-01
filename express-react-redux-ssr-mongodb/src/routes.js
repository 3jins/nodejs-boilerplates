import App from './components/App';
import NoMatch from './components/NoMatch';

export default [
  {
    path: '/',
    exact: true,
    component: App,
    // loadData: () => getSomeDataFromActionIfYouNeed(),
  }, {
    path: '/*',
    component: NoMatch,
  },
];
