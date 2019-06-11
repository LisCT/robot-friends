import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('render snapshot', () => {

    expect(shallow(<CardList />)).toMatchSnapshot()

});