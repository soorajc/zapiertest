import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  timeView: {
    height: 0.10 * height,
    justifyContent: 'center',
    paddingLeft: '6%',
  },
  time: {
    color: '#4F4F4F',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  statusView: {
    flexDirection: 'row',
    paddingLeft: '6%',
    width: '100%',
  },
  workTypeButton: {
    alignItems: 'center',
    backgroundColor: '#E9E9EB',
    borderColor: '#E9E9EB',
    borderRadius: 5,
    borderWidth: 2,
    justifyContent: 'center',
    padding: '1%',
    width: '26%',
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
    justifyContent: 'center',
    padding: '1%',
    marginRight: '5%',
    width: '26%',
  },
  statusButtonLabel: {
    color: '#FFC25B',
    fontSize: width * 0.03,
    fontWeight: 'bold',
  },
  statusIcon: {
    marginLeft: '3%',
    marginTop: '1%',
  },
  addressView: {
    flexDirection: 'row',
    paddingLeft: '6%',
    paddingRight: '6%',
    paddingTop: '6%',
    width: '100%',
  },
  addressTextView: {
    borderBottomWidth: 2,
    borderColor: '#E9E9EB',
    paddingBottom: '6%',
    width: '80%',
  },
  addressIconView: {
    alignItems: 'flex-end',
    borderBottomWidth: 2,
    borderColor: '#E9E9EB',
    justifyContent: 'center',
    paddingBottom: '6%',
    width: '20%',
  },
  address: {
    color: '#656565',
    fontSize: width * 0.04,
  },
  companyView: {
    paddingLeft: '6%',
    paddingRight: '6%',
    width: '100%',
  },
  companyName: {
    color: '#4F4F4F',
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginBottom: '4%',
    marginTop: '6%',
  },
  contactView: {
    flexDirection: 'row',
    width: '100%',
  },
  imageContainer: {
    borderBottomWidth: 2,
    borderColor: '#E9E9EB',
    paddingBottom: '6%',
    width: '15%',
  },
  profileImage: {
    borderRadius: (width * 0.14) / 2,
    height: width * 0.14,
    width: width * 0.14,
  },
  contactContainer: {
    borderBottomWidth: 2,
    borderColor: '#E9E9EB',
    paddingBottom: '6%',
    paddingLeft: '5%',
    paddingTop: '2%',
    width: '65%',
  },
  contactLabel: {
    color: '#656565',
    fontSize: width * 0.04,
  },
  contactName: {
    color: '#4F4F4F',
    fontWeight: 'bold',
    fontSize: width * 0.04,
    marginTop: '1%',
  },
  iconContainer: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#E9E9EB',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: '6%',
    width: '20%',
  },
  chatIcon: {
    marginRight: '15%',
  },
  panelView: {
    paddingLeft: '6%',
    paddingRight: '6%',
    paddingTop: '5%',
  },
  panelContainer: {
    borderBottomWidth: 2,
    borderColor: '#E9E9EB',
    paddingBottom: '6%',
  },
  panelLabel: {
    marginBottom: '4%',
    color: '#b5b5b5',
    fontSize: width * 0.03,
  },
  panelText: {
    color: '#656565',
    fontSize: width * 0.03,
  },
  buttonView: {
    flexDirection: 'row',
    height: 0.24 * height,
    padding: '6%',
    width: '100%',
  },
  acceptButton: {
    alignItems: 'center',
    backgroundColor: '#108ee8',
    borderColor: '#108ee8',
    borderRadius: 5,
    borderWidth: 2,
    height: 0.07 * height,
    justifyContent: 'center',
    width: '49%',
  },
  acceptButtonLabel: {
    color: 'white',
    fontSize: width * 0.05,
  },
  declineButton: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#108ee8',
    borderRadius: 5,
    borderWidth: 2,
    height: 0.07 * height,
    justifyContent: 'center',
    marginRight: '3%',
    width: '49%',
  },
  declineButtonLabel: {
    color: '#108ee8',
    fontSize: width * 0.05,
  },
});

export default styles;
