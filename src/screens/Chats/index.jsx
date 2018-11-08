/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import stylesGlobal from 'styles/global';
import Icon from 'react-native-vector-icons/FontAwesome5';


type Props = {
  navigation: {
    navigate: string => void,
  },
};
export default class Chats extends Component<Props> {
  static navigationOptions = {
    title: 'Chats',
  };

  componentDidMount() {}

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View style={[stylesGlobal.container, styles.container]}>
        <Icon name="comments" size={16} />
        <Text style={styles.welcome}>No chats yet</Text>
        <Text style={styles.instructions}>Start chat with someone from your contact list</Text>
        <Button
          title="Go to contacts"
          onPress={() => navigate('Contacts')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
