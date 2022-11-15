import style from "./style.module.css"
import visa from "../assets/images/visa.png"
import master from "../assets/images/visa.png"

// export function CreditCard(props) {
//     return(
//         <div className={style.creditCard}>
//             <img  src={props.img} alt='bandeira'/>
//             <div>**** **** **** {props.number}</div>
//             <div>
//                 Expires: {props.expirationMonth} / {props.expirationYear}
//                 {props.owner}
//             </div>
//         </div>
//     )
//     }

    export function CreditCard(props) {
        let type = props.type === "Visa" ? visa : master
        let number = props.number.slice(-4)
        let bgc = { backgroundColor: props.bgColor, color: props.color }
    
        return (
            <div className={style.card} style={bgc}>
                <img className={style.bandeira} src={type} alt="bandeira do cartão"></img>
                <div className={style.numberCard}>********{number}</div>
                <div className={style.cardDown}>
                    <div>Expires <span id='expireDate'>{props.expirationMonth}/{props.expirationYear}</span> <span id='nameBank'> {props.bank}</span></div>
                    <div className='name'>{props.owner}  </div>
                </div>
            </div>
        )
    }