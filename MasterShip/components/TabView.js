import React from 'react';
import {PropTypes} from "react";
import {StyleSheet,
        Text,
        View,
        Button
      } from "react-native";
// import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

const contextTypes = {
  drawer: React.PropTypes.object,
};

const propTypes = {
  name: PropTypes.string,
  sceneStyle: View.propTypes.style,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 2,
    borderColor: 'red',
  },
});

const TabView = (props, context) => {
  const drawer = context.drawer;
  return (
    <View style={[styles.container, props.sceneStyle ]}>
      <Text>Tab {props.title}</Text>
      <Button onPress={Actions.root}>Back</Button>
      <Button onPress={Actions.slide_menu}
        title="Learn More" color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

TabView.contextTypes = contextTypes;
TabView.propTypes = propTypes;

export default TabView;
