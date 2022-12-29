import { useState } from "react";
import  {Item} from "./types/Item"
import * as C from "./app.style"
import { ListItem } from "./Componets/ListItens/index";
import { AddArea } from "./Componets/AddArea";

function App() { 

const [lista, setLista] = useState<Item[]>([
]);  


const handleAddTask = (taskName: string) =>{
 let newList = [...lista]; 
 newList.push({
  id:lista.length + 1, 
  tarefa:taskName, 
  done:false
 }); 
 setLista(newList); 
}

const Del = ( index : number) => {
  let delArray = [...lista]; 
    delArray.splice(index ,1)
     setLista(delArray)
}

const attTaskDone = (id: number, done: boolean) => {
  let newList = [...lista];
  for(let i in newList) {
    if(newList[i].id === id) {
      newList[i].done = done;
    }
  }
  setLista(newList);
}

  return (
    <> 
     <C.GlobalStyle />
     <C.Container>
        <C.Area>
          <C.Header>
             CRUD TYPESCRIPT
          </C.Header>  
            <AddArea  
            onEnter ={handleAddTask} />
           {lista.map((item, index)=>(
            <ListItem 
              Del = {Del}  
              key={index} 
              id={index} 
              item={item}
              attTaskDone={attTaskDone} />
           ))}
        </C.Area>
     </C.Container>
    </>
  );
}

export default App;
