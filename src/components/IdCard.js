function IdCard(props){
    <div className = "id">
        <img src = "https://randomuser.me/api/portraits/men/44.jpg"></img>
        <p className = "person">
            <div className = "lastName">Last Name: {props.lastName}</div>
            <div className = "firstName">First Name: {props.firstName}</div>
            <div className = "gender">Gender: {props.gender}</div>
            <div className = "height">Height: {props.height}</div>
            <div className = "birth">Birth: {props.birth}</div>
        </p>
    </div>
}
