import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

ReactDOM.render(
  <React.StrictMode>
  <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
  />
  </React.StrictMode>
)


ReactDOM.render(
  <React.StrictMode>
    <Greetings lang="de">Ludwig</Greetings>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Random min={1} max={100}/>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <CreditCard
    type="Visa"
    number="0123456789018845"
    expirationMonth={3}
    expirationYear={2021}
    bank="BNP"
    owner="Maxence Bouret"
    bgColor="#11aa99"
    color="white"/>
  </React.StrictMode>,
  document.getElementById('root')
);