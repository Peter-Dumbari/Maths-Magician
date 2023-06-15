import React from 'react';
import renderer from 'react-test-renderer';
import Displayqoutes from '../src/Components/DisplayQuotes/Displayqoutes';

test('renders correctly', () => {
  const component = renderer.create(<Displayqoutes />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
