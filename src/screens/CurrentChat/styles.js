import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    // padding: 10,
  },
  list: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },
  bottomSafeArea: {
    backgroundColor: '#FAFAFA',
    marginLeft: 10,
    marginRight: 10,
  },
  newMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    height: 30,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 3,
    marginRight: 5,
    paddingLeft: 5,
    paddingRight: 5,
    color: '#333',
  },
  sendButton: {
    color: '#333',
  },
});
