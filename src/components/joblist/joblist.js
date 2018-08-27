/**
 * JobList View
 * author: soorajc
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-navigation';
import {
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import Header from '../header/header';
import JobCard from '../jobcard/jobcard';
import DummyData from './dummydata';
import Styles from './styles';


const plusButton = require('../../assets/plusbutton.png');

export default class JobList extends Component<> {

  keyExtractor = (item, index) => index;

  showJobDetails(item) {
    this.props.navigation.navigate('JobDetails', { details: item });
  }

  render() {
    return (
      <SafeAreaView style={Styles.container} testID={'jobList'}>
        <Header
          leftIcon="bars"
          title="JUL 2018"
          rightIconList={['search', 'bell', 'sliders']}
          badgeCount="2"
          navigation={this.props.navigation}
        />
        <FlatList
          style={Styles.listView}
          keyExtractor={this.keyExtractor}
          data={DummyData}
          renderItem={({ item }) =>
            <JobCard
              jobNumber={item.no}
              showJobDetails={() => this.showJobDetails(item)}
              name={item.name}
              time={item.time}
              company={item.company}
              address={item.address}
              type={item.type}
              status={item.status}
              iconName={item.iconName}
              iconColor={item.iconColor}
            />
          }
        />
        <TouchableOpacity style={Styles.addButton}>
          <Image
            resizeMode="contain"
            style={Styles.plusIcon}
            source={plusButton}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

JobList.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};
