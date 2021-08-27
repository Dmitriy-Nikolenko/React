import { Route, Redirect } from "react-router-dom"

export function PrivateRoute({isAuth, ...rest}) {
    return (
        isAuth ? <Route {...rest}/> : <Redirect to="/login"/>
    )
}

export function PubliceRoute({isAuth, ...rest}) {
    return (
        !isAuth ? <Route {...rest}/> : <Redirect to="/"/>
    )
}