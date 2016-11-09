/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TestAndroidTextInheritance extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.outter}><Text style={styles.inner}>I should be green!</Text></Text>
      </View>
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
  outter: {
    color: 'red',
    fontWeight: 'normal',
    lineHeight: 20,
  },
  inner: {
    color: 'green',
    fontWeight: 'normal',
    fontSize: 12
  }
});

AppRegistry.registerComponent('TestAndroidTextInheritance', () => TestAndroidTextInheritance);
