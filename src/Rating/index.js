import style from "./style.module.css"

export function Rating(props) {

    const numberOfStars = Math.round(props.children)
  
    let star = '★'
    let starEmpty = '☆'
  
    let result = star.repeat(numberOfStars).padEnd(5, starEmpty)
  
    return (
      <div className={style.showRating}>
        <p >{result}</p>
      </div>
    )
  }
  
 