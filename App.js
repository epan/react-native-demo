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
      <View style={{height: 300}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
