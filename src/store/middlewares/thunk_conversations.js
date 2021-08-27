import { db } from "../../components/api/firebase"
import {
  GET_CONVERSATIONS_ERROR,
  GET_CONVERSATIONS_START,
  GET_CONVERSATIONS_SUCCESS,
} from "../conversations/types"

export const getConversationFB = () => async (dispatch) => {
  try {
    dispatch(GET_CONVERSATIONS_START())
    await db
      .ref("conversations")
      .get()
      .then((snapshot) => {
        const conversations = []
        snapshot.forEach((snap) => {
          conversations.push(snap.val())
        })
        dispatch({ type: GET_CONVERSATIONS_SUCCESS, payload: conversations })
      })
  } catch (e) {
    dispatch(GET_CONVERSATIONS_ERROR(e))
  }
}
