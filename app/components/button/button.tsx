import { Props } from "next/script"
import styles from "./button.module.css"

type prop = {
    title: string
    onChlick?:() => void
    clasName?:'center'
}

export function Button(Props:prop){   
    return(
        <input type="button" value={Props.title} className={`${styles.defoult} ${Props.clasName == 'center'?styles.center:''}`} onChange={Props.onChlick}/>
    )
}