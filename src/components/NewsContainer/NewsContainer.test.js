import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';
import NewsArticle from '../NewsArticle/NewsArticle';
import local from "../../data/local";



describe('NewsContainer', () => {
    it('renders a container with passed articles', () => {
        const wrapper = shallow(
          <NewsContainer
            articles={[
              <NewsArticle key={1} 
              article={local[1]} 
              />,
              <NewsArticle
                key={2}
                article={local[2]}
              />
            ]}
          />
        );

        expect(wrapper).toMatchSnapshot();
    })

    it('renders an error if no articles are available', () => {
        const wrapper = shallow(<NewsContainer articles={[]} />)

        expect(wrapper).toMatchSnapshot();
    })
})