import { Button, makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";

export const ButtonAuth = () => {
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
          <Link to="/login"><h3>Авторизация</h3></Link>
        </Button>
      </div>
    )
  }