import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../assets/components/Main';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("<Main /> with no props", () => {
  const container = shallow(<Main />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot()
  })

  it('should have a title', () => {
    expect(container.find('h1[className="title"]').length).toEqual(1);
  });
})