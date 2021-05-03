import React from 'react';
import renderer from 'react-test-renderer';
import SelectTime from '../assets/components/SelectTime';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("<SelectTime /> with no props", () => {
  const container = shallow(<SelectTime />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot()
  })

  it('should have the class select', () => {
    expect(container.find('div[className="select"]').length).toEqual(1);
  });
})