import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import App from './index';

configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;
  function init() {
    return mount(<App />);
  }

  afterEach(() => {
    wrapper.unmount();
  });


  it('render', async () => {
    wrapper = await init();
    expect(wrapper.exists('.container')).toBeTruthy();
  });
});
