import {Paper, MenuItem, MenuList, makeStyles} from '@material-ui/core';
import {MessageList, ChatList} from "./components"

export const App = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      background: theme.light.color,     
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList>
          <MenuItem><ChatList /></MenuItem>         
        </MenuList>
      </Paper>  
      <MessageList />   
    </div>    
  );  
}

