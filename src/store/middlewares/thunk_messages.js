import { GET_CONVERSATIONS_START } from "../conversations/types"
import { GET_MESSAGES_ERROR, GET_MESSAGES_SUCCESS } from "../messages/types"

export const getMessagesFB =
  () =>
  async (dispatch, _, { getMessagesApi }) => {
    try {
      dispatch(GET_CONVERSATIONS_START())
      await getMessagesApi().then((snapshot) => {
        const messages = {}
        snapshot.forEach((snap) => {
          messages[snap.key] = Object.values(snap.val())
        })
        dispatch({ type: GET_MESSAGES_SUCCESS, payload: messages })
      })
    } catch (e) {
      dispatch(GET_MESSAGES_ERROR(e))
    }
  }
