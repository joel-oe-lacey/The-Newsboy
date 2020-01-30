import React from 'react';
import './NewsContainer.scss'
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = ({articles}) => {
    const newsArticles = articles.map(article => {
        return <NewsArticle key={article.id ? article.id : 1} article={article} />
    })

    return <section className="news-container">
        {newsArticles.length ? newsArticles : <h1>No matches found, please select your news type and search again</h1>}
    </section>
}

export default NewsContainer;