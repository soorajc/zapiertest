import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0086FF',
    flexDirection: 'row',
    height: '10%',
    width: '100%',
  },
  leftIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
  },
  titleContainer: {
    justifyContent: 'center',
    width: '50%',
  },
  title: {
    color: 'white',
    fontSize: 0.055 * width,
  },
  rightIconContainer: {
    flexDirection: 'row',
    width: '35%',
  },
  iconSubContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33.33%',
  },
  badge: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderColor: '#0086FF',
    borderRadius: Math.round(width * 0.05) / 2,
    borderWidth: 2,
    height: Math.round(width * 0.05),
    justifyContent: 'center',
    marginLeft: width * 0.83,
    marginTop: height * 0.020,
    position: 'absolute',
    width: Math.round(width * 0.05),
  },
  badgeCount: {
    color: 'white',
    fontWeight: 'bold',
    margin: '1%',
  },
});

export default styles;
