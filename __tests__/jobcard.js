import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { StyleSheet } from 'react-native';

import JobCard from '../src/components/jobcard/jobcard';

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


it('JobCard Is Rendered Properly With All The Props', () => {
  const jobCard = renderer.create(
    <JobCard
      jobNumber={'8801'}
      showJobDetails={() => jest.fn()}
      name={'testjob'}
      time={'12:00 am to 13:00 pm'}
      company={'test company'}
      address={'test address'}
      type={'test type'}
      iconName={'alert'}
      status={'test status'}
      iconColor={'red'}
    />
    ,
  ).getInstance();
  expect(jobCard.props.jobNumber).toEqual('8801');
  expect(jobCard.props.name).toEqual('testjob');
  expect(jobCard.props.time).toEqual('12:00 am to 13:00 pm');
  expect(jobCard.props.company).toEqual('test company');
  expect(jobCard.props.address).toEqual('test address');
  expect(jobCard.props.type).toEqual('test type');
  expect(jobCard.props.status).toEqual('test status');
  expect(jobCard.props.iconColor).toEqual('red');
});


it('JobCard OnPress Function Is Working Properly', () => {
  const mockCallback = jest.fn();
  const jobCard = renderer.create(
    <JobCard
      jobNumber={'8801'}
      showJobDetails={mockCallback}
      name={'testjob'}
      time={'12:00 am to 13:00 pm'}
      company={'test company'}
      address={'test address'}
      type={'test type'}
      iconName={'alert'}
      status={'test status'}
      iconColor={'red'}
    />
    ,
  ).toJSON();
  findById(jobCard, 'actionButtonJobCard').props.onPress();
  expect(mockCallback.mock.calls.length).toBe(1);
});
