import React from 'react'

function Dice(props){
    const [count, setCount] = React.useState(0);
    let array = ['/img/dice-empty.png', '/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png']

    for(i = 0; i < array.length; i++){
        return array[i];
    }

    random = Math.floor(Math.random() * array.length - 1);

    return(
    <div onClick = {() => setCount(count = random)}>
        <img src = {array[count]}/>
    </div>
    )
}