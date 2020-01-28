import React from 'react';
import './NewsArticle.scss';

const NewsArticle = (props) => {
    return (<article className="news-article">
        <img src={props.article.img} alt={props.article.headline}></img>
        <section className="news-content">
            <h1>{props.article.headline}</h1>
            <p>{props.article.description}</p>
        </section>
        <button><a href={props.article.url}>Link to the article  -></a></button>
    </article>
    )}

export default NewsArticle;