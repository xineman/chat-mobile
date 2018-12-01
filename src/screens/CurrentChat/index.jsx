// @flow
import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import stylesGlobal from 'styles/global';
import styles from './styles';
import Message from './Message';
import NewMessage from './NewMessage';


// type Props = {
// };
type NavigationType = {
  getParam: (string, string) => string,
}
const CurrentChat = () => (
  <KeyboardAvoidingView style={[stylesGlobal.container, styles.container]} behavior="padding">
    <View style={styles.list}>
      <FlatList
        data={[
          { key: 'a', text: 'test message', isMine: false },
          { key: 'b', text: 'test message', isMine: true },
          { key: 'c', text: 'test dfdfsadf', isMine: false },
          { key: 'd', text: 'test ytryrt', isMine: true },
          { key: 'e', text: 'test asdfcvv', isMine: false },
          { key: 'f', text: 'test asdfcvv', isMine: false },
          { key: 'gg', text: 'test asdfcvv', isMine: false },
          { key: 'h', text: 'test asdfcvv', isMine: false },
          { key: 'i', text: 'test asdfcvv', isMine: false },
          { key: 'j', text: 'test asdfcvv', isMine: false },
          { key: 'k', text: 'test asdfcvv', isMine: false },
          { key: 'l', text: 'test asdfcvv', isMine: false },
          { key: 'm', text: 'test asdfcvv', isMine: false },
          { key: 'n', text: 'test asdfcvv', isMine: false },
          { key: 'o', text: 'test asdfcvv', isMine: false },
          { key: 'p', text: 'test asdfcvv', isMine: false },
          { key: 'q', text: 'test asdfcvv', isMine: false },
          { key: 'er', text: 'sadfsd ytryrt', isMine: true },
        ]}
        inverted
        renderItem={({ item }) => <Message {...item} />}
      />
    </View>
    <SafeAreaView style={styles.bottomSafeArea}>
      <NewMessage />
    </SafeAreaView>
  </KeyboardAvoidingView>
);

CurrentChat.navigationOptions = ({ navigation }: { navigation: NavigationType }) => ({
  title: navigation.getParam('username', 'no-username'),
});

export default CurrentChat;
