import * as React from 'react';
import { StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{ uri: 'https://localhost:8050' }}
      >
        <StatusBar hidden />
      </WebView>
    );
  }
}