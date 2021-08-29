import { Link } from "react-router-dom"
import { firebaseApp } from "../api/firebase"
import { LoginForm, AuthTemplate } from "../auth-form"


const onSubmit = (email, password) => {
    return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
 }
export function SingUp() {
    return (
        <AuthTemplate link={<Link to="/login">У вас есть аккаунт? Войдите</Link>}>
            <LoginForm title="Регистрация" submitButton="Зарегистрироваться" onSubmit={onSubmit}/>
        </AuthTemplate>
    )
}