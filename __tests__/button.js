import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { StyleSheet } from 'react-native';

import Button from '../src/components/button/button';

const findById = function (tree, testID) {
  if (tree.props && tree.props.testID === testID) {
    return tree;
  }
  if (tree.children && tree.children.length > 0) {
    const childs = tree.children;
    for (let i = 0; i < childs.length; i++) {
      const item = findById(childs[i], testID);
      if (typeof (item) !== 'undefined') {
        return item;
      }
    }
  }
};


const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
  },
  label: {
    color: 'black',
  },
});

it('Button Is Rendered Properly With All The Props', () => {
  const button = renderer.create(
    <Button
      style={styles.button}
      label="Decline Job"
      labelStyle={styles.label}
    />
    ,
  ).getInstance();
  expect(button.props.label).toEqual('Decline Job');
  expect(button.props.style).toEqual(styles.button);
  expect(button.props.labelStyle).toEqual(styles.label);
});
