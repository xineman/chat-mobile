// @flow
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

type Props = {
};
type NavigationType = {
  getParam: (string, string) => string,
}
class CurrentChat extends Component<Props> {
  static navigationOptions = ({ navigation }: { navigation: NavigationType }) => ({
    title: navigation.getParam('username', 'no-username'),
  });

  render() {
    return (
      <View>
        <Text>current chat</Text>
      </View>
    );
  }
}

export default CurrentChat;
