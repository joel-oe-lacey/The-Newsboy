import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
    return (<section>
        <img src={props.article.imgUrl} alt={props.article.title}></img>
        <h1>{props.article.title}</h1>
        <p>{props.article.body}</p>
        <button><a href={props.article.link}>Link to the article</a></button>
    </section>
    )}

export default NewsArticle;