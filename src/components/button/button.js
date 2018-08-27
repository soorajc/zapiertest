/**
 * Button View
 * author: soorajc
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
 TouchableOpacity,
 ViewPropTypes,
 Text,
} from 'react-native';

export default class Button extends Component<> {

  render() {
    return (
      <TouchableOpacity
        style={this.props.style}
        disabled={this.props.disabled}
      >
        <Text
          style={this.props.labelStyle}
          numberOfLines={this.props.numberOfLines}
        >
          {this.props.label}
        </Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  labelStyle: Text.propTypes.style,
  numberOfLines: PropTypes.number,
  style: ViewPropTypes.style,
};

Button.defaultProps = {
  disabled: false,
  label: '',
  labelStyle: '',
  numberOfLines: 1,
  style: '',
};
