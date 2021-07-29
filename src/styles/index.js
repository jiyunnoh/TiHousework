import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  floatingBtn: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
  },
  todoListItem: {
    height: 60,
    width: '84%',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowOffset: {width: 2, height: 4},
  },
  swipeLeftContent: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  swipeRightContent: {
    height: 60,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default styles;
