import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Page from '../pages/home';

import { NavBar, SearchBar, Footer } from '../shared/components';

configure({ adapter: new Adapter() });

describe('Home Page', () => {
  it('should render nav, search and birds', () => {
    const page = mount(<Page.Controller />);

    expect(page.find(NavBar)).toHaveLength(1);
    expect(page.find(SearchBar)).toHaveLength(1);
    expect(page.find(Footer)).toHaveLength(1);
    expect(page.find(Page.View.Birds)).toHaveLength(1);
  });
});
