import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Chat } from "./components/chat-list";
import { ProfileButton, Profile } from "./components/profile/";
import { BackToChat, ButtonIn } from './components/buttons';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ButtonIn />
        </Route>
        <Route path="/chat">
          <ProfileButton />
          <Chat />
        </Route>
        <Route path="/profile">
          <BackToChat />
          <Profile />
        </Route>
        <Route path="*">
          <h1>Такой сраницы не существует</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
