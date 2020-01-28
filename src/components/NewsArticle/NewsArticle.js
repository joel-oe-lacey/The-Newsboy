import React from 'react';
import './NewsArticle.scss';

const NewsArticle = (props) => {
    return (<section className="news-article">
        <img src={props.article.img} alt={props.article.headline}></img>
        <h1>{props.article.headline}</h1>
        <p>{props.article.description}</p>
        <button><a href={props.article.url}>Link to the article</a></button>
    </section>
    )}

export default NewsArticle;