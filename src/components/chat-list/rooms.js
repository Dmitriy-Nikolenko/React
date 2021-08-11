import {Paper, MenuItem, MenuList, makeStyles} from '@material-ui/core';
import {Link, useRouteMatch} from "react-router-dom"
import {MessageList} from "../message-list"

export const Rooms = () => {
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
      const match = useRouteMatch();

    return (
        <div className={classes.root}>
        <Paper className={classes.paper}>
        <MenuList>
          <MenuItem><Link to={`${match.url}/room1`}>room1</Link></MenuItem>  
          <MenuItem><Link to={`${match.url}/room2`}>room2</Link></MenuItem>
          <MenuItem><Link to={`${match.url}/room3`}>room3</Link></MenuItem>           
        </MenuList>           
      </Paper> 
      <MessageList /> 
        </div>

    )
}