function Random(props){
    return(
        <div className = "rando">A random number between {props.min} and {props.max} is: {Math.floor((Math.random() * (props.max - 1)) + props.min)}</div>
    )
}