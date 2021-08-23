
import { sendMessage } from "../messages"
import { SEND_MESSAGE } from "../messages/types"
export const answerBot = (store) => (next) => (action) => {
    if (action.type === SEND_MESSAGE && action.payload.message.author === "User") {
        setTimeout(() => {             
                store.dispatch(sendMessage({author: "Bot", message: "Middleware: Ваше сообщение доставлено"}, action.payload.roomId))
            }, 1)
        }
        
        return next(action)    
}