import React from 'react';

function ClickablePicture(props){
    const [picture, setPicture] = React.useState(props.img);
    return(
        <div onClick = {() => setPicture(picture = props.imgClicked)}>{picture}</div>
    )
}