import { db } from "./firebase"

export const getMessagesApi = () => db.ref("messages").get()

export const sendMessagesApi = (roomId, author, message) =>
  db.ref("messages").child(roomId).push({ author, message })
