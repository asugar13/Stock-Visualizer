import React from 'react';
import Freeze from '../assets/components/Freeze';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("<Freeze /> with props", () => {
  const mockCallBack = jest.fn();
  const container = shallow(<Freeze freeze={false} setFreeze={mockCallBack} />);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot()
  })

  it('should have text saying Freeze', () => {
    expect(container.find('Button').text()).toEqual("Freeze");
  });

  it('should trigger the setFreeze hook with a click event', () => {
    container.find('Button').simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1);

  });

  // it('test prop changes', () => {
  //   container.find('Button').simulate('click')
  //   expect(container.find('Button').text()).toEqual("Restart");
  // });
})