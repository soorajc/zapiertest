/**
 * JobCard View
 * author: soorajc
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
 ImageBackground,
 TouchableOpacity,
 View,
 Text,
 Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../button/button';
import Styles from './styles';

const { width } = Dimensions.get('window');
const cardBackground = require('../../assets/jobcard.png');

export default class JobCard extends Component<> {

  render() {
    return (
      <TouchableOpacity
        testID={'actionButtonJobCard'}
        onPress={() => this.props.showJobDetails()}
        style={Styles.container}
      >
        <ImageBackground
          resizeMode="stretch"
          style={Styles.imageBackground}
          source={cardBackground}
        >
          <View style={Styles.header}>
            <View style={Styles.jobNumberContainer}>
              <Text style={Styles.jobNumber} numberOfLines={1}>
                {this.props.jobNumber}
              </Text>
            </View>
            <View style={Styles.jobTitleContainer}>
              <Text style={Styles.jobTitle} numberOfLines={1}>
                {this.props.name}
              </Text>
            </View>
            <View style={Styles.iconContainer}>
              <Icon
                name={this.props.iconName}
                size={width * 0.04}
                color={this.props.iconColor}
              />
            </View>
          </View>
          <View style={Styles.bodyContainer}>
            <View style={Styles.descriptionContainer}>
              <Text style={Styles.time}>
                {this.props.time}
              </Text>
              <Text style={Styles.companyName}>
                {this.props.company}
              </Text>
              <Text style={Styles.address} numberOfLines={2}>
                {this.props.address}
              </Text>
            </View>
            <View style={Styles.buttonContainer}>
              <Button
                disabled
                style={Styles.workTypeButton}
                label={this.props.type}
                labelStyle={Styles.workTypeButtonLabel}
                numberOfLines={1}
              />
              <Button
                disabled
                style={Styles.statusButton}
                label={this.props.status}
                labelStyle={Styles.statusButtonLabel}
                numberOfLines={1}
              />
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

JobCard.propTypes = {
  address: PropTypes.string,
  company: PropTypes.string,
  iconColor: PropTypes.string,
  iconName: PropTypes.string,
  jobNumber: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  showJobDetails: PropTypes.func,
  time: PropTypes.string,
  type: PropTypes.string,
};

JobCard.defaultProps = {
  address: '',
  company: '',
  iconColor: '',
  iconName: '',
  jobNumber: '',
  name: '',
  status: '',
  showJobDetails: null,
  time: '',
  type: '',
};
