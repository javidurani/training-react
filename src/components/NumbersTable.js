import React from 'react';

function NumbersTable(props){
    let array;
    for(i = 0; i < props.limit; i++){
        array[i] = i+1;
        return(
            <div className = "table">{array[i]}</div>
        )
    }
}