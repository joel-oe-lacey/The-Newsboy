import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';
import NewsArticle from '../NewsArticle/NewsArticle';


describe('NewsContainer', () => {
    it('renders a container with passed articles', () => {
        const wrapper = shallow(<NewsContainer articles={[
            <NewsArticle
                key={1}
                article={{
                    img: 'www.imgTestUrl.com',
                    headline: 'Important Headline',
                    description: 'Important description text',
                    url: 'www.testRedirect.com'
            }} />,
            <NewsArticle
                key={2}
                article={{
                    img: 'www.imgTestUrl2.com',
                    headline: 'Other Headline',
                    description: 'Other description text',
                    url: 'www.testRedirect2.com'
            }} />,
        ]} />)

        expect(wrapper).toMatchSnapshot();
    })

    it('renders an error if no articles are available', () => {
        const wrapper = shallow(<NewsContainer articles={[]} />)

        expect(wrapper).toMatchSnapshot();
    })
})