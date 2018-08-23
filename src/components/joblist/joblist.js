/**
 * JobList View
 * author: soorajc
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-navigation';

import Header from '../header/header';
import Styles from './styles';

export default class JobList extends Component<> {

  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <Header
          leftIcon="bars"
          title="JUL 2018"
          rightIconList={['search', 'bell', 'sliders']}
          badgeCount="2"
          navigation={this.props.navigation}
        />
      </SafeAreaView>
    );
  }
}

JobList.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};
