import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {
  Navigator,
} from 'react-native-deprecated-custom-components';

import Landing from './app/components/Landing';
import Dashboard from './app/components/Dashboard';
import { globals } from './app/styles';

class assemblies extends Component {
  render() {
    return (
      <Navigator
        style={globals.flex}
        initialRoute={{ name: 'Ladning' }}
        renderScene={(route, navigator) => {
          switch (route.name) {
            case 'Landing':
              return <Landing navigator={navigator} />;
            case 'Dashboard':
              return <Dashboard navigator={navigator} />;
            default:
              return <Landing navigator={navigator} />;
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('assemblies', () => assemblies);
