import {Route, BrowserRouter, Switch} from "react-router-dom"
import { Main } from "./components";
import { ChatList } from "./components/chat-list"
import { ProfileButton, Profile } from "./components/profile";


export const App = ({ count }) => { 
 
  return (          
  <BrowserRouter>  
    <Switch>
      <Route exact path="/">
        <Main />   
      </Route>
      <Route path="/chat">
        <ProfileButton /> 
        <ChatList  /> 
      </Route>
      <Route path="/profile">
       <Profile  />
      </Route>
      <Route path="*">
        <h1>Такой сраницы не существует</h1>
      </Route>
    </Switch>
</BrowserRouter>
  );  
}



