// @flow
import React from 'react';
import {
  TouchableHighlight,
  Image,
  Text,
  View,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';


type Props = {
  id: string,
  name: string,
  imageUrl: string,
  navigation: {
    navigate: (string, any) => void,
  },
};
const ContactListItem = ({
  id,
  name,
  imageUrl,
  navigation: { navigate },
}: Props) => (
  <TouchableHighlight onPress={() => navigate('CurrentChat', { id, username: name })}>
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
      />
      <Text>{ name }</Text>
    </View>
  </TouchableHighlight>
);

export default withNavigation(ContactListItem);
