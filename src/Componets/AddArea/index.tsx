
import { useState, KeyboardEvent } from 'react';
import * as C from './style';

type Props = {
    onEnter: (taskName: string) => void 
}





export const AddArea = ({onEnter}:Props) => {
    const [inputText, setInputText] = useState('');
    
    function handleKeyUp (e: KeyboardEvent) {
        if(e.code === "Enter" && inputText !== "") {
            onEnter(inputText)
            setInputText('')
        }
     }

     function handleClick () {
            onEnter(inputText)
            setInputText('')
     }


    return (
        <C.Container>
            <div
             onClick={handleClick}
             className="Soma">+</div> 
            
            <input
                type="text"
                placeholder="Adicione uma tarefa"
                value={inputText}
                onChange={ e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            /> 
        </C.Container>
    );
}