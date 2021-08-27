import { db } from "../../components/api/firebase";
import { clearMessageValue } from "../conversations";
import { sendMessage, sendMessageError } from "../messages";



export const sendMessageThunk = ({ author, message }, roomId) => async (dispatch) => {

  try {
    await db.ref("messages").child(roomId).push({ author, message })
    dispatch(sendMessage({ author, message }, roomId))
    dispatch(clearMessageValue(roomId))
  } catch (e) {
    dispatch(sendMessageError({ author, message }, roomId))
  }
}