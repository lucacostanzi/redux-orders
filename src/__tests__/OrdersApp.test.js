/**
 * Created by luca on 19/03/2018.
 */
import React from 'react';
import {configure, shallow} from 'enzyme';
import {OrdersList} from '../components/OrdersList'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


let lang = "nl";

const wrapper = shallow(
  < OrdersList />
);
