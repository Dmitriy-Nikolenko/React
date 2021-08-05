import React from 'react';
import {Button, makeStyles, Input} from '@material-ui/core';
import { useState, useEffect } from "react";
import { Send } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export const MessageList = () => {
    const [messageList, setMessageList] = useState([])

    const [value, setValue] = useState ("")
    

      
    const handleSendMessage = () => {
        setMessageList((state) => [...state, {value, author: "User"}])
        setValue("");
       };
    const classes = useStyles();
    
    useEffect(() => {  
        const lastMessageList = messageList[messageList.length - 1]

        if (lastMessageList?.author === "User") {
            setTimeout(() => {
                setMessageList((state) => [
                    ...state, {
                        value: "Ваше сообщение добавлено", author: "Bot"
                    }
                ])
            }, 500)
        }

    }, [messageList])

    return (
        <div>
            <ul>
                {messageList.map((message, id) => <li key={id}>{message.value} = {message.author}</li>)}
            </ul>
    <Input 
           placeholder="Введите сообщение" 
           inputProps={{ 'aria-label': 'description' }} 
           autoFocus={true} 
           value={value} 
           onChange = {(e) => setValue(e.target.value)}>

    </Input>
                       
    <Button
            onClick={handleSendMessage}
            variant="contained"
            color="primary"
            className={classes.button}            
      >
        Send
        <Send></Send>
      </Button>
        
        </div>
    )
        
    
}