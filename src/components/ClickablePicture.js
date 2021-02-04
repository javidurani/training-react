function ClickablePicture(props){
    const [picture, setPicture] = useState(props.img);
    return(
        <div onClick = {() => setPicture(picture = props.imgClicked)}>{picture}</div>
    )
}