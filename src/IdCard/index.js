import style from "./style.module.css"


export function IdCard(props) {
    return(
        <div className={style.card}>
            <img className={style.imgCard} src={props.picture} alt="foto" />
            <div className={style.dataCard}>
                <p> <strong>First name: </strong>{props.firstName} </p>
                <p> <strong>Last name: </strong>{props.lastName} </p>
                <p> <strong>Gender </strong>{props.gender} </p>
                <p> <strong>Height </strong>{props.height} </p>
                <p> <strong>Birth </strong>{props.birth} </p>
            </div>



        </div>
    )
}