import React from 'react';

function Carousel(props){
    random = Math.floor(Math.random() * props.imgs.length - 1);

    const [picture, setPicture] = React.useState(0);
    return(
    <div className = "parent">
        <div onClick = {() => setPicture(picture = props.imgs[random])}></div>
        <div onClick = {() => setPicture(picture = props.imgs[random])}></div>
    </div>
    )
}