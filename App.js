/**
 * Zappier Test App
 */

import {
  StackNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import JobList from './src/components/joblist/joblist';
import JobDetails from './src/components/jobdetails/jobdetails';

const Home = createDrawerNavigator({
  JobList: {
    screen: JobList,
  },
});

const App = StackNavigator({
  Home: { screen: Home },
  JobDetails: { screen: JobDetails },
},
  {
    headerMode: 'none',
  },
);

export default App;
