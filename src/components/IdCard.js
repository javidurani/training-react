function IdCard(props){
    <div className = "id">
        <img src = {props.image}/>
        <p className = "person">
            <div className = "lastName">Last Name: {props.lastName}</div>
            <div className = "firstName">First Name: {props.firstName}</div>
            <div className = "gender">Gender: {props.gender}</div>
            <div className = "height">Height: {props.height}</div>
            <div className = "birth">Birth: {props.birth}</div>
        </p>
    </div>
}
