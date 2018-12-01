import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  TextInput,
  Text,
  Alert,
} from 'react-native';
import styles from './styles';

type Props = {
};
type State = {
  value: string,
};
class NewMessage extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  handleChange = (value) => {
    this.setState({ value });
  }

  handleSend = () => {
    Alert.alert('send', this.state.value);
  }

  render() {
    const { value } = this.state;
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} value={value} onChangeText={this.handleChange} />
        <TouchableHighlight onPress={this.handleSend}>
          <Text style={styles.sendButton}>Send</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default NewMessage;
