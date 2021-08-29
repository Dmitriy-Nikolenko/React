import { HANDLE_CHANGE_MESSAGE_VALUE,
         CLEAR_MESSAGE_VALUE,
         GET_CONVERSATIONS_START,
         GET_CONVERSATIONS_SUCCESS,
         GET_CONVERSATIONS_ERROR } from "./types";


const initialState = {
  conversations: [],
  conversationsPending: false,
  conversationsError: null,
}

const updateConversations = (state, roomId, value) =>
  state.conversations.map((conversation) => {
    return conversation.title === roomId
      ? { ...conversation, value }
      : conversation
  })

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE_MESSAGE_VALUE:
      return {
        ...state,
        conversations: updateConversations(
          state,
          action.payload.roomId,
          action.payload.value,
        ),
      }
    case CLEAR_MESSAGE_VALUE:
      return {
        ...state,
        conversations: updateConversations(state, action.payload, ""),
      }
    case GET_CONVERSATIONS_START:
        return {
         ...state,
         conversationsPending: true,
        }
    case GET_CONVERSATIONS_SUCCESS:
      return {
       ...state,
        conversationsPending: false,
        conversations: action.payload,
        }
    case GET_CONVERSATIONS_ERROR:
      return {
           ...state,
           conversationsError: action.payload,
           conversationsPending: false,
       }
    default:
      return state
  }
}
