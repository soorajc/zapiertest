import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  listView: {
    flex: 0.80,
  },
  addButton: {
    alignItems: 'flex-end',
    flex: 0.20,
    justifyContent: 'center',
  },
  plusIcon: {
    height: width * 0.15,
    marginRight: '5%',
    width: width * 0.15,
  },
});

export default styles;
