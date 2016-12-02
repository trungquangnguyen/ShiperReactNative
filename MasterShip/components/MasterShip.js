/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Router,
  Scene
} from 'react-native-router-flux';
import { NavigationDrawer } from './NavigationDrawer'
import { Launch } from './Launch'

export default class MasterShip extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={Launch} title="PageOne" initial={true} />
          <Scene key="pageTwo" component={Launch} title="PageTwo" />
        </Scene>
      </Router>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
