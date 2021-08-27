import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { conversationsReducer } from "../store/conversations";
import { gistsReducer } from "../store/gist/reducer";
import { messagesReducer } from "../store/messages";
import { answerBot } from "../store/middlewares";
import { profileReducer } from '../store/profile';







export * from "./message-list";
export * from "./chat-list";
export * from "./profile/";

const persistConfig = {
  key: 'root',
  storage,
}

const persistReduser = persistReducer(
  persistConfig,
  combineReducers({
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
    gists: gistsReducer,
  }))
export const store = createStore(
  persistReduser,
  compose(
    applyMiddleware(thunk, answerBot),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

)
export const persistore = persistStore(store)

