
import './App.css';
import { IdCard } from './IdCard';
import {Greetings} from './Greetings';
import { Random } from './Random';
import { CreditCard } from './CreditCard';
import {Rating} from './Rating'
import {DriverCard} from './DriverCard'

function App() {
  return (
    <div className="App">

<IdCard
  firstName='John'
  lastName='Doe'
  gender='male'
  height={178}
  birth="1992-07-14"
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName="Delores "
  firstName='Obrien'
  gender='female'
  height={172}
  birth="1988-05-11"
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
     
<br/>

<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>
<Greetings lang="es">José</Greetings>
<Greetings lang="en">Mike</Greetings>

<br/>

<Random min={1} max={2} />
<Random min={4} max={10} />
<Random min={53} max={100} />
<Random min={17} max={54} />

<br/>

<CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" 
/>
    
<CreditCard
  type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222"
/>
    
<CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white" 
/>


<Rating>0</Rating>
<Rating>1</Rating>
<Rating>1.49</Rating>
<Rating>1.4</Rating>
<Rating>5</Rating>
<Rating>2.3</Rating>
<Rating>3.7</Rating>



<DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }}
/>

<DriverCard
  name="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }}
/>



    </div>
  );
}

export default App;
