import styles from "./serch.module.css"

type props = {
    onchange?:() => void
}

export function Serch(prop:props){
    return(
        <input type="serch" className={styles.input} placeholder="serch" onChange={prop.onchange}/>
    )
}