
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { profileReducer } from '../store/profile';
import { conversationsReducer } from "../store/conversations";
import { messagesReducer } from "../store/messages";
import storage from 'redux-persist/lib/storage';
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
  }))
export const store = createStore(
  persistReduser,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

)
export const persistore = persistStore(store)

