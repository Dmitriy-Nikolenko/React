import { sendMessage } from "../messages";
import { clearMessageValue } from "../conversations";

// export const thunk = (store) => (next) => (action) => {
//     if (typeof action === 'function') {
//        return  action(store.dispatch, store.getState)
//     }
//     return next(action)
// }

export const  sendMessageThunk = (message, roomId) => (dispatch) => {
    dispatch(sendMessage( message, roomId))
    dispatch(clearMessageValue(roomId))
  
    if (message.author === "User")
    setTimeout(() =>dispatch(sendMessage( {author: "Bot", message: "Thunk: Ваше сообщение доставлено"}, roomId)), 2)
  }