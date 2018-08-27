/**
 * JobDetails View
 * author: soorajc
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
 ScrollView,
 Text,
 View,
 Dimensions,
 Image,
} from 'react-native';

import Header from '../header/header';
import Styles from './styles';
import Button from '../button/button';

const { width } = Dimensions.get('window');

export default class JobDetails extends Component<> {

  render() {
    const { state } = this.props.navigation;
    const details = state.params.details;
    return (
      <SafeAreaView style={Styles.container}>
        <Header
          leftIcon="chevron-left"
          title={details.no}
          rightIconList={['', 'bell', 'ellipsis-h']}
          badgeCount="2"
          type="back"
          navigation={this.props.navigation}
        />
        <ScrollView>
          <View style={Styles.timeView}>
            <Text style={Styles.time}>
              {details.time}
            </Text>
          </View>
          <View style={Styles.statusView}>
            <Button
              style={Styles.statusButton}
              label={details.status}
              labelStyle={Styles.statusButtonLabel}
            />
            <Button
              style={Styles.workTypeButton}
              label={details.type}
              labelStyle={Styles.workTypeButtonLabel}
            />
            <Icon
              name="alert"
              size={width * 0.05}
              style={Styles.statusIcon}
              color={details.iconColor}
            />
          </View>
          <View style={Styles.addressView}>
            <View style={Styles.addressTextView}>
              <Text style={Styles.address}>
                {details.address}
              </Text>
            </View>
            <View style={Styles.addressIconView}>
              <Icon
                name="car"
                size={width * 0.07}
                style={Styles.statusIcon}
                color="#656565"
              />
            </View>
          </View>
          <View style={Styles.companyView}>
            <Text style={Styles.companyName}>
              {details.company}
            </Text>
            <View style={Styles.contactView}>
              <View style={Styles.imageContainer}>
                <Image
                  source={details.image}
                  resizeMode="contain"
                  style={Styles.profileImage}
                />
              </View>
              <View style={Styles.contactContainer}>
                <Text style={Styles.contactLabel}>
                  Contact
                </Text>
                <Text style={Styles.contactName}>
                  {details.contact}
                </Text>
              </View>
              <View style={Styles.iconContainer}>
                <Icon
                  name="message-text"
                  size={width * 0.07}
                  style={Styles.chatIcon}
                  color="#656565"
                />
                <Icon
                  name="phone"
                  size={width * 0.07}
                  color="#656565"
                />
              </View>
            </View>
          </View>
          <View style={Styles.panelView}>
            <View style={Styles.panelContainer}>
              <Text style={Styles.panelLabel}>
               Description
              </Text>
              <Text style={Styles.panelText}>
                {details.description}
              </Text>
            </View>
          </View>
          <View style={Styles.panelView}>
            <View style={Styles.panelContainer}>
              <Text style={Styles.panelLabel}>
               Special Instructions
              </Text>
              <Text style={Styles.panelText}>
                {details.instructions}
              </Text>
            </View>
          </View>
          <View style={Styles.buttonView}>
            <Button
              style={Styles.declineButton}
              label="Decline Job"
              labelStyle={Styles.declineButtonLabel}
            />
            <Button
              style={Styles.acceptButton}
              label="Accept Job"
              labelStyle={Styles.acceptButtonLabel}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

JobDetails.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
  }).isRequired,
};
