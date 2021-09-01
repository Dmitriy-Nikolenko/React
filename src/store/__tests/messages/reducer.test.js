import { messagesReducer, sendMessage, sendMessageError } from "../../messages"
import {
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
  SEND_MESSAGE_START,
} from "../../messages/types"

describe("message reducer", () => {
  it("send message succes", () => {
    const state = messagesReducer(
      { messages: {}, messagesPending: false, messagesError: null },
      sendMessage({ author: "Bot", message: "text" }, "room1"),
    )
    expect(state.messages.room1[0].author).toBe("Bot")
  })

  it("send message error", () => {
    const state = messagesReducer(
      { messages: {}, messagesPending: false, messagesError: null },
      sendMessageError({ author: "Bot", message: "error" }, "room2"),
    )
    expect(state.messages.room2[0].message).toBe("error")
  })

  it("get message success ", () => {
    const state = messagesReducer(
      { messages: {}, messagesPending: false, messagesError: null },
      { type: GET_MESSAGES_SUCCESS, payload: { room1: [1, 2, 3, 4] } },
    )
    expect(Object.keys(state.messages)).toEqual(["room1"])
    expect(state.messages.room1).toEqual([1, 2, 3, 4])
  })

  it("get message error ", () => {
    const state = messagesReducer(
      { messages: {}, messagesPending: false, messagesError: null },
      { type: GET_MESSAGES_SUCCESS, payload: { room2: "error" } },
    )
    expect(state.messages.room2).toBe("error")
    expect(state.messagesPending).toBe(false)
  })

  it("default message ", () => {
    const state = messagesReducer({ messages: 1 }, {})
    expect(state.messages).toBe(1)
  })

  it("get message start ", () => {
    const state = messagesReducer(
      { messages: {}, messagesPending: false, messagesError: null },
      { type: GET_MESSAGES_START },
    )
    expect(state.messagesPending).toBe(true)
  })

  it("send message start ", () => {
    const state = messagesReducer(
      { messages: {}, messagesPending: false, messagesError: null },
      { type: SEND_MESSAGE_START },
    )
    expect(state.messagesPending).toBe(true)
  })
})
