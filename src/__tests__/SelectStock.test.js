import React from 'react';
import renderer from 'react-test-renderer';
import SelectStock from '../assets/components/SelectStock';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("<SelectStock /> with no props", () => {
  const container = shallow(<SelectStock />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot()
  })

  it('should have the selectStock id tag', () => {
    expect(container.find('div[id="selectStock"]').length).toEqual(1);
  });
})