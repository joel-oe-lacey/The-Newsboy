import React from 'react';
import './NewsContainer.scss'
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = ({articles}) => {
    const newsArticles = articles.map(article => {
        return <NewsArticle key={article.id} article={article} />
    })

    return <section className="news-container">
        {newsArticles}
    </section>
}

export default NewsContainer;