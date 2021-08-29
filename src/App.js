import { bool } from "prop-types"
import { Route, BrowserRouter, Switch } from "react-router-dom"
import { AuthSession } from "./components/auth-form"
import { BackToMain, Menu } from "./components/buttons"
import { Chat } from "./components/chat-list"
import { Gist } from "./components/gist"
import { Login, SingUp } from "./components/pages"
import { Profile } from "./components/profile/"
import { PrivateRoute, PubliceRoute } from "./components/route"

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={bool} path="/">
          <Menu />
        </Route>
        <PrivateRoute isAuth={AuthSession()} path="/chat">
          <BackToMain />
          <Chat />
        </PrivateRoute>
        <PrivateRoute isAuth={AuthSession()} path="/profile">
          <BackToMain />
          <Profile />
        </PrivateRoute>
        <PrivateRoute isAuth={AuthSession()} path="/gist">
          <BackToMain />
          <Gist />
        </PrivateRoute>
        <PubliceRoute path="/login">
          <BackToMain />
          <Login />
        </PubliceRoute>
        <PubliceRoute isAuth={AuthSession()} path="/sign-up">
          <BackToMain />
          <SingUp />
        </PubliceRoute>
        <PubliceRoute isAuth={AuthSession()} path="*">
          <BackToMain />
          <h1>Такой сраницы не существует</h1>
        </PubliceRoute>
      </Switch>
    </BrowserRouter>
  )
}
