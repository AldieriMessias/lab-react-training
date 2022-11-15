import style from "./style.module.css"


export function Greetings(props) {
    
    
    if (props.lang === "de") {
        return (
            <p className={style.pGreeting} >Hallo {props.children}</p>
        )
    }
    if (props.lang === "fr") {
        return (
            <p className={style.pGreeting}>Bonjour {props.children}</p>
        )
    }

    if(props.lang ==="es"){
        return (
            <p className={style.pGreeting}>Hola {props.children}</p> 
        )
    }

    if(props.lang === "en"){
        return(
            <p className={style.pGreeting}>Hello {props.children} </p>
        )
    }
}