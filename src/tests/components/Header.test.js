import { shallow } from 'enzyme';
import Header from '../../components/Header';
import React from 'react';


test('Should render header correctly', () => {
    const wrapper = new shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});
