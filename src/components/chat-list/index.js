import { Switch, Route } from "react-router-dom";
import { MessageList } from "../message-list";
import { ChatList } from "./chat-list";


export function Chat() {
    return (
        <Switch>
        <Route path={["/chat/:roomId", "/chat"]}>
          <Route path="/chat/:roomId">          
            <ChatList />
            <MessageList /> 
            </Route>
            <Route exact={true} path="/chat">            
              <h1>Добро пожаловать в чат. Выберите комнату для начала общения</h1>                
              <ChatList />      
            </Route>        
        </Route>
        <Route path="*">
          <h1>такого чата нет</h1>
        </Route>
        </Switch>
        )

}

