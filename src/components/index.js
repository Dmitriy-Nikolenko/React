import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
import { conversationsReducer } from "../store/conversations"
import { gistsReducer } from "../store/gist/reducer"
import { messagesReducer } from "../store/messages"
import { answerBot } from "../store/middlewares"
import { profileReducer } from "../store/profile"
import { getMessagesApi, sendMessagesApi } from "./api/messages"

export * from "./message-list"
export * from "./chat-list"
export * from "./profile/"

export const reducer = combineReducers({
  profile: profileReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
  gists: gistsReducer,
})

const persistConfig = {
  key: "root",
  storage,
}

const persistreduser = persistReducer(persistConfig, reducer)
export const store = createStore(
  persistreduser,
  compose(
    applyMiddleware(
      answerBot,
      thunk.withExtraArgument({ getMessagesApi, sendMessagesApi }),
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ ?
      window.__REDUX_DEVTOOLS_EXTENSION__() : (args) => args,
  ),
)
export const persistore = persistStore(store)
