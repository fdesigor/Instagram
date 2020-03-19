import React from 'react';
import { Text, View, YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

import Routes from './src/routes';

export default function App() {
  return <Routes />
}
