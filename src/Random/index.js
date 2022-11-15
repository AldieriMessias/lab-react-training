import style from "./style.module.css"


export function Random(props){

    // return (
    //     Math.floor(Math.random() * props.max  + 1)
    // )


    let random = Math.floor(Math.random() * (props.max - props.min)  ) + props.min ;
    
    return (
        <div className={style.divRandom}>
            Random Value between {props.min} and {props.max} = {random}
        </div>
    )

}