import * as C from "./style"
import {Item} from "../../types/Item"
import { useState} from "react"

type Props = {
    item : Item,
    Del:(index : number) => void
    id: number, 
    attTaskDone: (id: number, done: boolean) => void

}


export const ListItem = ({item, Del, id, attTaskDone}: Props) =>{  

 const [isChecked, setIsChecked] = useState(item.done); 

function attDone (e : any) {
  attTaskDone(item.id, e.target.checked) 
  setIsChecked(e.target.checked)
}
    return(
      <C.Container done={isChecked}> 
      <div>
      <input 
         onChange={attDone}
         type="checkbox" 
         checked={isChecked} />
        <label>{item.tarefa} - {item.done.toString()}</label> 
      </div>
        <C.Del 
        onClick={()=>{
         Del(id)
        }}>
         Delet
        </C.Del>
      </C.Container>
    )
}