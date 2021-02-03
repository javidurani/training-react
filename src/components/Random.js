function Random(props){
    return(
        <div className = "rando">A random number between {props.min} and {props.max} is {Math.floor((Math.random() * props.max) + props.min)}</div>
    )
}