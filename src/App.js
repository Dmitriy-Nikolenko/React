import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Chat } from "./components/chat-list";
import { ProfileButton, Profile } from "./components/profile/";
import { BackToChat, ButtonIn } from './components/buttons';
import { GistIn } from "./components/buttons/gist-in";
import { Gist } from "./components/gist";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ButtonIn />
          <GistIn />
        </Route>
        <Route path="/chat">
          <ProfileButton />
          <Chat />
        </Route>
        <Route path="/profile">
          <BackToChat />
          <Profile />
        </Route>
        <Route path="/gist">
          <Gist />
        </Route>
        <Route path="*">
          <h1>Такой сраницы не существует</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
