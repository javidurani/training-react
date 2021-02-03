import './creditcard.css'

function CreditCard(props){
    <div className = "card">
        <p className = "credentials">
            <div className = "type">Type: {props.type}</div>
            <div className = "number">Number: {props.number}</div>
            <div className = "expirationMonth">ExpirationMonth: {props.expirationMonth}</div>
            <div className = "expirationYear">ExpirationYear: {props.expirationYear}</div>
            <div className = "bank">Bank: {props.bank}</div>
            <div className = "owner">Owner: {props.owner}</div>
        </p>
    </div>
}