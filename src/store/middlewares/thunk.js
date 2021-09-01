import { clearMessageValue } from "../conversations"
import { sendMessage, sendMessageError } from "../messages"

export const sendMessageThunk =
  ({ author, message }, roomId) =>
  async (dispatch, _, { sendMessagesApi }) => {
    try {
      await sendMessagesApi(roomId, author, message)
      dispatch(sendMessage({ author, message }, roomId))
      dispatch(clearMessageValue(roomId))
    } catch (e) {
      dispatch(sendMessageError({ author, message }, roomId))
    }
  }
