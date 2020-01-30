import React from 'react';
import './Menu.scss'

const Menu = (props) => {
    const selectNews = (event, type) => {
        event.preventDefault();
        props.selectNewsType(type);
    }

    return (
        <nav className="menu">
            <h1>What's <span className="headerColor">New?</span></h1>
            <button onClick={(event) => selectNews(event, 'local')}>Local News</button>
            <button onClick={(event) => selectNews(event, 'technology')}>Technology</button>
            <button onClick={(event) => selectNews(event, 'entertainment')}>Entertainment</button>
            <button onClick={(event) => selectNews(event, 'science')}>Science</button>
            <button onClick={(event) => selectNews(event, 'health')}>Health</button>
        </nav>
    )
}

export default Menu;