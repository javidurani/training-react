function DriverCard(props){
    <div className = "card">
        <img src = {props.img}></img>
        <p>
        <div className = "name">{props.name}</div>
        <div className = "rating">{props.rating}</div>
        <div className = "licensePlate">{props.car.model} - {props.car.licensePlate}</div>
        </p>
    </div>
}