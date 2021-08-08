import {Button, makeStyles} from '@material-ui/core';
import {Link} from "react-router-dom"
export * from "./message-list"
export * from "./chat-list"
export * from "./profile"


export const Main = () => {
    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
      }));
    const classes = useStyles();
    return (
        <div>            
            <Button
            variant="contained"
            color="primary"
            className={classes.button}>
            <Link to="/chat">Войти в чат</Link>
            </Button>            
        </div>
    )
}

