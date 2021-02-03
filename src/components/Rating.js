function Rating(props){
    {
        if(props.children < 1){
            return(
                <div className = "stars">Rating: 0 stars</div>
            )
        }

        if(props.children < 2){
            return(
                <div className = "stars">Rating: 1 stars</div>
            )
        }

        if(props.children < 3){
            return(
                <div className = "stars">Rating: 2 stars</div>
            )
        }

        if(props.children < 4){
            return(
                <div className = "stars">Rating: 3 stars</div>
            )
        }

        if(props.children < 5){
            return(
                <div className = "stars">Rating: 4 stars</div>
            )
        }

        if(props.children < 1){
            return(
                <div className = "stars">Rating: 5 stars</div>
            )
        }
    }
}