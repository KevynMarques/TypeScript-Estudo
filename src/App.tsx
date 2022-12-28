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

  return (
    <> 
     <C.GlobalStyle />
     <C.Container>
        <C.Area>
          <C.Header>
             CRUD TYPESCRIPT
          </C.Header>  
            <AddArea  onEnter ={handleAddTask} />
           {lista.map((item, index)=>(
            <ListItem  key={index} item={item} />
           ))}
        </C.Area>
     </C.Container>
    </>
  );
}

export default App;
