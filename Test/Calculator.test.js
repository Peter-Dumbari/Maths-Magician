import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../src/Components/Calculator';

describe('Calculator component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Calculator />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
