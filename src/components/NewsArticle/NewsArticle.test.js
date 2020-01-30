import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
    it('renders an article utilizing available data', () => {
        const wrapper = shallow(<NewsArticle 
            key={1}
            article={{
              img:'www.imgTestUrl.com',
              headline:'Important Headline',
              description:'Important description text',
              url:'www.testRedirect.com'
            }} />)

        expect(wrapper).toMatchSnapshot();
    })
});