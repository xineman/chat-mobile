// @flow
import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import styles from 'styles/global';
import ContactListItem from './ContactListItem';

type Props = {
};
type State = {
  contacts: Array<any>,
};
class Contacts extends Component<Props, State> {
  static navigationOptions = {
    title: 'Contacts',
  };

  constructor() {
    super();
    this.state = {
      contacts: [
        { key: 'a', name: 'Yurii Hupalo', imageUrl: 'https://via.placeholder.com/32' },
        { key: 'b', name: 'Vladimir', imageUrl: 'https://via.placeholder.com/32' },
        { key: 'c', name: 'Alexander', imageUrl: 'https://via.placeholder.com/32' },
        { key: 'd', name: 'George', imageUrl: 'https://via.placeholder.com/32' },
        { key: 'e', name: 'Dmitry', imageUrl: 'https://via.placeholder.com/32' },
        { key: 'f', name: 'John', imageUrl: 'https://via.placeholder.com/32' },
        { key: 'g', name: 'Alexander 2', imageUrl: 'https://via.placeholder.com/32' },
      ],
    };
  }

  render() {
    const { contacts } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          style={{
            paddingTop: 10,
            paddingBottom: 10,
          }}
          data={contacts}
          renderItem={({ item }) => <ContactListItem {...item} />}
        />
      </View>
    );
  }
}

export default Contacts;
