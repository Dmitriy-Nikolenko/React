import { Button, makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";

export const ButtonSignUp = () => {
    const useStyles = makeStyles((theme) => ({
      button: {
        margin: theme.spacing(1),
      }
    }));
    const classes = useStyles();
    return (
      <div>
        <Button
          variant="contained"
          color="white"
          className={classes.button}>
          <Link to="/sign-up"><h3>Регистрация</h3></Link>
        </Button>
      </div>
    )
  }