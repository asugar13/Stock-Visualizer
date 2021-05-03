import React from 'react';
import renderer from 'react-test-renderer';
import CurrentPrice from '../assets/components/CurrentPrice';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Conditional render if no props or props are passed to <CurrentPrice/>", () => {
  const initialProps = {
    selectedStockPrice: 20
  };
  let container = shallow(<CurrentPrice {...initialProps} />);

  it('should have the selectStock id tag', () => {
    expect(container.find('div[className="loader"]').length).toEqual(1);
  });

  let containerNoProps = shallow(<CurrentPrice />);
  it('should NOT have the selectStock id tag', () => {
    expect(containerNoProps.find('div[className="loader"]').length).toEqual(0);
  });
})