import {Button, makeStyles} from '@material-ui/core';
import {Link} from "react-router-dom";


export const ProfileButton = () => {

    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
          color: "blanchedalmond"
        },
      }));
    const classes = useStyles();

    return(
        <div>
            <Button
            variant="contained"
            color="white"
            className={classes.button}>
            <Link to="/profile">Профиль</Link>
            </Button>
        </div>
    )
}