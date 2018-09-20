import App from './App/App.jsx';
import Main from './Main/Main.jsx';
import Categories from './Categories/Categories.jsx';
import Random from './Random/Random.jsx';

const routeConfig = [
  {
    path: '/',
    Component: App,
    children: [
      {
        Component: Main,
      },
      {
        path: 'categories',
        Component: Categories,
      },
      {
        path: 'random',
        Component: Random,
      },
    ],
  },
];

export default routeConfig;