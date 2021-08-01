import { useState, useEffect } from "react";

export const AppHooks = () => {
    const [messageList, setMessageList] = useState([{
        value: '', author: ''
    }])

    const [value, setValue] = useState ("")
    const [author, setAuthor] = useState ("") 
    
    const handleSendMessage = () => {
        setMessageList(state => [...state, {value, author}])
        setValue("");
        setAuthor("");
    };
    
    
    useEffect(() => {   
        //пропускаем первоначальный запуск useEffect
        return() => {
            alert('Ваще сообщение успешно добавлено')
        } 
    }, [messageList])

    return (
        <div>
            <ul>
                {messageList.map((message, id) => <li key={id}>{message.value} = {message.author}</li>)}
            </ul>
            <h3>Текст сообщения</h3>
            <input value={value} onChange = {(e) => setValue(e.target.value)}></input>
            <h3>Автор</h3>
            <input value={author} onChange = {(e) => setAuthor(e.target.value)}></input>
            
            <button onClick={handleSendMessage}>
            send</button>
        
        </div>
    )
        
    

};