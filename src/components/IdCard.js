function IdCard(props){
    <div className = "id">
        <img src = "https://randomuser.me/api/portraits/men/44.jpg"></img>
        <p className = "person">
            <div className = "lastName">Last Name: {props.lastName}</div>
            <div className = "firstName">Last Name: {props.firstName}</div>
            <div className = "gender">Last Name: {props.gender}</div>
            <div className = "height">Last Name: {props.height}</div>
            <div className = "birth">Last Name: {props.birth}</div>
        </p>
    </div>
}
