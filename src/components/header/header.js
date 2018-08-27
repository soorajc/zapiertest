/**
 * Header View
 * author: soorajc
 */

import React, { Component } from 'react';
import {
 View,
 Text,
 Dimensions,
 TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './styles';

const { width } = Dimensions.get('window');

export default class Header extends Component<> {

  renderRightIconRow(item) {
    if (item) {
      return (
        <Icon
          name={item}
          size={width * 0.055}
          color="white"
        />
      );
    }
  }

  render() {
    return (
      <View style={Styles.header}>
        <TouchableOpacity
          testID={'headerActionButton'}
          onPress={
            this.props.type === 'back'
            ?
            () => this.props.navigation.goBack()
            :
            () => this.props.navigation.openDrawer()
        }
          style={Styles.leftIconContainer}
        >
          <Icon
            name={this.props.leftIcon}
            size={width * 0.055}
            color="white"
          />
        </TouchableOpacity>
        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>
            {this.props.title}
          </Text>
        </View>
        <View style={Styles.rightIconContainer}>
          {
            this.props.rightIconList.map(item =>
              <TouchableOpacity
                key={item}
                style={Styles.iconSubContainer}
              >
                {this.renderRightIconRow(item)}
              </TouchableOpacity>,
            )
          }
        </View>
        {
           this.props.badgeCount
           ?
             <TouchableOpacity style={Styles.badge}>
               <Text
                 style={[Styles.badgeCount,
                   {
                     fontSize: (width * 0.025) - (1.4 * this.props.badgeCount.length),
                   },
                 ]}
               >
                 {this.props.badgeCount}
               </Text>
             </TouchableOpacity>
           :
             <View />
         }
      </View>
    );
  }
}

Header.propTypes = {
  badgeCount: PropTypes.string,
  leftIcon: PropTypes.string,
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    openDrawer: PropTypes.func,
  }).isRequired,
  rightIconList: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  type: PropTypes.string,
};

Header.defaultProps = {
  badgeCount: '',
  leftIcon: 'bars',
  rightIconList: null,
  title: '',
  type: 'drawer',
};
