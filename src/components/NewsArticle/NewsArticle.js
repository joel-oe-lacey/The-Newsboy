import React from 'react';
import './NewsArticle.scss';

const NewsArticle = ({article: {img, headline, description, url}}) => {
    return (<article className="news-article">
        <img src={img} alt={headline}></img>
        <section className="news-content">
            <h1>{headline}</h1>
            <p>{description}</p>
        </section>
        <button><a href={url}>Link to the article  -></a></button>
    </article>
    )}

export default NewsArticle;