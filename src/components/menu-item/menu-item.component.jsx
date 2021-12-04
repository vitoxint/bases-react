import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-tem.styles.scss";


const MenuItem = ({ title , imageUrl , size , linkUrl , history , match }) => (

    <div 
        className={`${size} menu-item`}
        onClick={ () => history.push(`${match.url}${linkUrl}`) }
    >

        <div  
            className="background-image" 
            style={{
                backgroundImage : `url(${imageUrl})`
            }} 
        />

        <div className="title">
            <h1>{title.toUpperCase()} </h1>
            <span className="subitle" >SHOP NOW</span>

        </div>

    </div>

);


// design pattern : HOC ( High Order Component )
export default withRouter(MenuItem);