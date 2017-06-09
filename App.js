import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bananas from './Bananas.js';
import BlinkText from './BlinkText.js';

export default class App extends React.Component {


  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      images: {
        width: 400,
        // height: 220
      }
    });

    return (
      // Try setting `flexDirection` to `column`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{height: 50, backgroundColor: 'powderblue'}} />
        <View style={{height: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
