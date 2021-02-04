function LikeButton(props){
    const [count, setCount] = useState(0);
    return(
        <div onClick = {() => setCount(count + 1)}>Likes: {count}</div>
    )
}