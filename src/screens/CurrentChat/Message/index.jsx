// @flow
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


type MessageType = {
  text: string,
  isMine?: boolean,
}
const Message = ({ text, isMine }: MessageType) => (
  <View style={[styles.container, isMine && styles.right]}>
    <Text style={styles.text}>{ text }</Text>
  </View>
);
Message.defaultProps = {
  isMine: false,
};

export default Message;
