import './creditcard.css'

function CreditCard(props){
 
if(type === "Visa"){
    return 'https://www.lebanonfcu.org/wp-content/uploads/2016/12/visa-logo.png'
}

else if(type === "Master Card"){
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1920px-Mastercard-logo.svg.png'
}


 return(   
    <div className = "card">
        <p className = "credentials">
            <div className = "number">**** **** ****{props.number % 10000}</div>
            <div className = "expirationMonth/year">{props.expirationMonth} {props.expirationYear}         {props.bank}</div> 
            <div className = "owner">Owner:{props.owner}</div>
        </p>
    </div>
 )
}