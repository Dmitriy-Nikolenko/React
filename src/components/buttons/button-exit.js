
import { Button, makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";
import { firebaseApp } from "../api/firebase";
import { AuthSession } from "../auth-form";



export const ButtonExit = () => {
    const useStyles = makeStyles((theme) => ({
      button: {
        margin: theme.spacing(1),
      },
    }));
    const classes = useStyles();

    const signOut = () => {
        return firebaseApp.auth().signOut()
    }
     if (AuthSession()) {
        return (
            <div>
             <Button
                variant="contained"
                color="white"
                className={classes.button}
                onClick={signOut}>          
                Выйти из сессии
              </Button>
            </div>
          )   
     }

     return (
         <div>
         <Button
                variant="contained"
                color="white"
                className={classes.button}
                onClick={signOut}>          
                <Link to="/login"> Вы не авторизованы. Авторизуйтесь.</Link>
              </Button>            
         </div>         
     )


  }

