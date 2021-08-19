import {Button, makeStyles} from '@material-ui/core';
import {Link} from "react-router-dom";

export const BackToChat = () => {

    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
          color: "blanchedalmond"
        },
      }));
    const classes = useStyles();    

    return (
        <>
        <Button
            variant="contained"
            color="white"
            className={classes.button}>
            <Link to="/chat">К списку чатов</Link>
        </Button>   
        </>
        

    )
}