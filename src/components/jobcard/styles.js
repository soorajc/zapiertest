import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: '3%',
    height: 0.24 * height,
    width: width * 0.95,
  },
  imageBackground: {
    backgroundColor: 'transparent',
    flex: 1,
    height: null,
    padding: 5,
    width: null,
  },
  header: {
    height: '25%',
    flexDirection: 'row',
  },
  jobNumberContainer: {
    justifyContent: 'center',
    width: '25%',
  },
  jobNumber: {
    color: '#4F4F4F',
    fontSize: width * 0.038,
    fontWeight: 'bold',
    marginLeft: '15%',
  },
  jobTitleContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '63%',
  },
  jobTitle: {
    color: '#656565',
    fontSize: width * 0.03,
    marginLeft: '5%',
  },
  iconContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '12%',
  },
  bodyContainer: {
    flexDirection: 'row',
    height: '75%',
  },
  descriptionContainer: {
    paddingLeft: '4%',
    paddingTop: '3%',
    width: '60%',
  },
  time: {
    color: '#656565',
    fontSize: height * 0.02,
  },
  companyName: {
    color: '#4F4F4F',
    fontSize: width * 0.03,
    fontWeight: 'bold',
    marginTop: '3%',
  },
  address: {
    color: '#656565',
    fontSize: height * 0.018,
    marginTop: '3%',
    width: '98%',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
  },
  workTypeButton: {
    alignItems: 'center',
    backgroundColor: '#E9E9EB',
    borderColor: 'transparent',
    borderRadius: 5,
    borderWidth: 2,
    height: 0.04 * height,
    justifyContent: 'center',
    padding: '5%',
    width: '65%',
  },
  workTypeButtonLabel: {
    color: '#4F5B6A',
    fontSize: width * 0.03,
    fontWeight: 'bold',
  },
  statusButton: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#FFC25B',
    borderRadius: 5,
    borderWidth: 2,
    height: 0.04 * height,
    justifyContent: 'center',
    marginLeft: '5%',
    marginTop: '8%',
    padding: '5%',
    width: '60%',
  },
  statusButtonLabel: {
    color: '#FFC25B',
    fontSize: width * 0.03,
    fontWeight: 'bold',
  },
});

export default styles;
