import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import JobDetails from '../src/components/jobdetails/jobdetails';

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


it('JobDetails Is Rendered Properly With All The Props', () => {
  const details = {
    no: 'JOB-0888',
    name: 'Install Equipment to HR Department',
    time: '9:30 am - 12:30 pm',
    company: 'Parts and Pieces',
    address: '1 Jurong West Central 2 #B1-23 Jurong Point,Singapore 648886',
    type: 'Installation',
    status: 'Dispatched',
    iconColor: '#F7435B',
    image: '',
    contact: 'Zexi Jiang',
    description: 'Install Equipment to HR Department and enable the software and integrate it with the current systems with firewall',
    instructions: 'Lift Faulty, Take stairs',
  };
  const mockCallback = jest.fn();
  const navigation = { state:
  { params: { details: details },
    routeName: 'JobList',
    key: 'JobDetails' },
    dispatch: mockCallback,
    navigate: mockCallback,
    goBack: mockCallback };
  const jobCard = renderer.create(
    <JobDetails
      navigation={navigation}
    />
    ,
  ).getInstance();
  expect(jobCard.props.navigation.state.params.details.no).toEqual('JOB-0888');
  expect(jobCard.props.navigation.state.params.details.name).toEqual('Install Equipment to HR Department');
  expect(jobCard.props.navigation.state.params.details.description).toEqual('Install Equipment to HR Department and enable the software and integrate it with the current systems with firewall');
});
