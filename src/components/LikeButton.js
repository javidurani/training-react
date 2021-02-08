import React from 'react';

function LikeButton(props){
    const [count, setCount] = React.useState(0);
    return(
        <div onClick = {() => setCount(count + 1)}>Likes: {count}</div>
    )
}