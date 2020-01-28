import React from 'react';
import './NewsContainer.scss'
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = (props) => {
    console.log('contProps', props)

    const newsArticles = props.articles.map(article => {
        return <NewsArticle key={article.id} article={article} />
    })

    return <section className="news-container">
        {newsArticles}
    </section>
}

export default NewsContainer;