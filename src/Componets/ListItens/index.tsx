import * as C from "./style"
import {Item} from "../../types/Item"
import { useState} from "react"
import { stringify } from "querystring"

type Props = {
    item : Item
}

export const ListItem = ({item}: Props) =>{ 
 
    const [isChecked, setIsChecked] = useState(item.done); 

    return(
      <C.Container done={isChecked}>
        <input 
         onChange={e => setIsChecked(e.target.checked)}
         type="checkbox" 
         checked={isChecked} />
        <label>{item.tarefa}</label>
      </C.Container>
    )
}