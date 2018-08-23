/**
 * Zappier Test App
 */

import {
  createDrawerNavigator,
} from 'react-navigation';

import JobList from './src/components/joblist/joblist';

const App = createDrawerNavigator({
  JobList: {
    screen: JobList,
  },
});

export default App;
