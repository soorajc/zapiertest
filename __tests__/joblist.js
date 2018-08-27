import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';


import JobList from '../src/components/joblist/joblist';

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


it('JobList Is Rendered Properly', () => {
  const jobList = renderer.create(
    <JobList testID={'jobList'} />
    ,
  ).toJSON();
  expect(findById(jobList, 'jobList')).toBeDefined();
});

it('Show Job Details Function Is Called', () => {
  const mockCallback = jest.fn();
  const navigation = { state:
  { params: { details: 'test' },
    routeName: 'JobList',
    key: 'JobDetails' },
    dispatch: mockCallback,
    navigate: mockCallback,
    goBack: mockCallback };
  const jobList = renderer.create(
    <JobList testID={'jobList'} navigation={navigation} />
    ,
  ).getInstance();
  jobList.showJobDetails('test');
  expect(mockCallback.mock.calls.length).toBe(1);
});
