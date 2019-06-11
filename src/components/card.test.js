import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

it('render snapshot', () => {

    expect(shallow(<Card />)).toMatchSnapshot()

});