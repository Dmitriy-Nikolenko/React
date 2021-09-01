import {
  GET_MESSAGES_ERROR,
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
  SEND_MESSAGE_ERROR,
  SEND_MESSAGE_START,
  SEND_MESSAGE_SUCCES,
} from "./types"

const initialState = {
  messages: {},
  messagesPending: false,
  messagesError: null,
}

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE_SUCCES:
    case SEND_MESSAGE_ERROR:
      return {
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] || []),
            { ...action.payload.message, id: new Date() },
          ],
          messagesPending: false,
        },
      }
    case GET_MESSAGES_START:
    case SEND_MESSAGE_START:
      return {
        ...state,
        messagesPending: true,
      }

    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload,
        messagesPending: false,
      }
    case GET_MESSAGES_ERROR:
      return {
        ...state,
        messagesError: action.payload,
        messagesPending: false,
      }
    default:
      return state
  }
}
