import {Rating} from "../Rating";
import style from "./style.module.css"


export function DriverCard(props){

    
    return ( 
        <div className={style.allDriveCard}>
            <div >
                <img className={style.imgDriveCard} src={props.img} alt="foto"  />
            </div>
            <div className={style.infoDriveCard}>
                <h2>{props.name}</h2>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model}{props.car.licensePlate}</p>
            </div>


        </div>


    )
        
}



