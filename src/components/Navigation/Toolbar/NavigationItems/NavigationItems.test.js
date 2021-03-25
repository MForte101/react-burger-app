import React from 'react';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

let wrapper;

beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
})

describe('<NavigationItems />', () => {
    it('should render two <NavigationItems /> if user is not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

}
);

describe('<NavigationItems isAuthenticated=true />', () => {
    it('should render 3 <NavigationItems /> if user is authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should render a <NavigationItem /> logout link', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    })


});