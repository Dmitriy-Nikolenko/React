
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { profileReducer } from '../store/profile';
import { conversationsReducer } from "../store/conversations";
import { messagesReducer } from "../store/messages";
import storage from 'redux-persist/lib/storage';
import { gistsReducer } from "../store/gist/reducer";
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
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

)
export const persistore = persistStore(store)

