import { SEND_MESSAGE_ERROR, SEND_MESSAGE_SUCCES } from "./types"

export const sendMessage = (message, roomId) => ({
  type: SEND_MESSAGE_SUCCES,
  payload: { message, roomId },
})

export const sendMessageError = (message, roomId) => ({
  type: SEND_MESSAGE_ERROR,
  payload: { message, roomId },
})

