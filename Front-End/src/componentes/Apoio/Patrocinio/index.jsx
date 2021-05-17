import React from 'react';

// import './styles.css';
const Patrocinio = (props) => {
    
    return(
        <article>
            <img src={props.image} style={{width:250, borderRadius:15}} alt={props.description}/>
            <h4>{props.children}</h4>
        </article>

    );
}
export default Patrocinio;