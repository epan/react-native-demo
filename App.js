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
        height: 220
      }
    });

    return (
      <View style={styles.container}>
        <Bananas style={styles.images}/>
        <BlinkText text='YOUR MOM' />
        <Text>IS A KIND HUMAN</Text>
      </View>
    );
  }
}
