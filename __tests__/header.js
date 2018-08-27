import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../src/components/header/header';

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

jest.mock('TouchableOpacity', () => {
  const mockComponent = require('jest-react-native');
  return mockComponent('TouchableOpacity');
});


it('Header Displayed With Expected Title And Icon With Type Drawer And Badge Count Zero', () => {
  const navigation = { state:
  {
    routeName: 'test',
    key: 'test',
  },
    dispatch: jest.fn(),
    goBack: jest.fn(),
    openDrawer: jest.fn(),
    navigate: jest.fn()
  };

  const header = renderer.create(
    <Header
      leftIcon="bars"
      title="JOB 8810"
      rightIconList={['search', 'bell', 'ellipsis-h']}
      navigation={navigation}
    />
    ,
  ).getInstance();
  expect(header.props.leftIcon).toEqual('bars');
  expect(header.props.title).toEqual('JOB 8810');
  expect(header.props.rightIconList).toEqual(['search', 'bell', 'ellipsis-h']);
  expect(header.props.type).toEqual('drawer');
});


it('Header Displayed With Expected Title And Icon With Type Back', () => {
  const navigation = { state:
  {
    routeName: 'test',
    key: 'test',
  },
    dispatch: jest.fn(),
    goBack: jest.fn(),
    openDrawer: jest.fn(),
    navigate: jest.fn()
  };

  const header = renderer.create(
    <Header
      leftIcon="chevron-left"
      title="JOB 8810"
      rightIconList={['', 'bell', 'ellipsis-h']}
      badgeCount="2"
      type="back"
      navigation={navigation}
    />
    ,
  ).getInstance();
  expect(header.props.leftIcon).toEqual('chevron-left');
  expect(header.props.title).toEqual('JOB 8810');
  expect(header.props.rightIconList).toEqual(['', 'bell', 'ellipsis-h']);
  expect(header.props.badgeCount).toEqual('2');
  expect(header.props.type).toEqual('back');
});


it('Header Back Action Function Is Working', () => {
  const mockCallback = jest.fn();
  const navigation = { state:
  {
    routeName: 'test',
    key: 'test',
  },
    dispatch: mockCallback,
    goBack: mockCallback,
    openDrawer: mockCallback,
    navigate: mockCallback
  };

  const tree = renderer.create(<Header
    leftIcon="chevron-left"
    title="JOB 8810"
    rightIconList={['', 'bell', 'ellipsis-h']}
    badgeCount="2"
    type="back"
    navigation={navigation}
  />).toJSON();
  findById(tree, 'headerActionButton').props.onPress();
  expect(mockCallback.mock.calls.length).toBe(1);
});


it('Header Drawer Action Function Is Working', () => {
  const mockCallback = jest.fn();
  const navigation = { state:
  {
    routeName: 'test',
    key: 'test',
  },
    dispatch: mockCallback,
    goBack: mockCallback,
    openDrawer: mockCallback,
    navigate: mockCallback
  };

  const tree = renderer.create(<Header
    leftIcon="chevron-left"
    title="JOB 8810"
    rightIconList={['', 'bell', 'ellipsis-h']}
    badgeCount="2"
    navigation={navigation}
  />).toJSON();
  findById(tree, 'headerActionButton').props.onPress();
  expect(mockCallback.mock.calls.length).toBe(1);
});
