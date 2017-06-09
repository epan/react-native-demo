import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Bananas from './Bananas.js';
import BlinkText from './BlinkText.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

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
        alignItems: 'center',
      }}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate"
          onChangeText={text => this.setState({ text })}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
