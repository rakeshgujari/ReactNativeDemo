/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  Text,
  View,
  Alert,
  Button,
  NativeModules
} from 'react-native';


type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  _onPressButton = () => {
    ReactManager.saveNGoBack(this.state.text)
};

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Text from native: {this.props.text}
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type here...!"
          onChangeText={(text) => this.setState({text})}
        />
        <Button
        title="Send to Native"
        color="#841584"
        onPress = {this._onPressButton}
        />
      </View>
    );
  }
}

const { ReactManager } = NativeModules;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
  height: 36,
  padding: 4,
  marginRight: 16,
  marginLeft: 16,
  fontSize: 18,
  borderWidth: 1,
  borderColor: '#CCC',
  borderRadius: 5,
  color: '#48BBEF',
},
});
