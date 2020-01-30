import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import science from "../../data/science";
import local from "../../data/local";


describe('App', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    })

    it('renders the whole app to the page', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should be able to select a different news type using selectNewsType', () => {
        wrapper.instance().selectNewsType('science');
        expect(wrapper.state('articles')).toEqual(science);
    })  

    it("should be able to search cards by involking searchCards", () => {
        const expected = [local[1]];
        wrapper.instance().searchCards("dinner");
        expect(wrapper.state("articles")).toEqual(expected);
    });  
})
