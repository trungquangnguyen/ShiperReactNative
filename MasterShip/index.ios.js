import { AppRegistry } from 'react-native';

// @todo remove when RN upstream is fixed
console.ignoredYellowBox = ['Warning: Failed propType: SceneView'];

import MasterShip from './components/MasterShip';

AppRegistry.registerComponent('MasterShip', () => MasterShip);
