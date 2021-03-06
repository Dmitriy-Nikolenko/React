import { GET_GISTS_START, GET_GISTS_SUCCESS, GET_GISTS_ERROR } from "./types"

const initialState = {
  gists: [],
  gistsPending: false,
  gistsError: null,
}

export const gistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_START:
     return  {
      ...state,
      gistsPending: true,  
      }
    case GET_GISTS_SUCCESS:
     return  {
      ...state,
      gistsPending: false,
      gists: action.payload,
      }
     case GET_GISTS_ERROR:
    return  {
      ...state,
      gistsError: action.payload,  
      gistsPending: false,  
     }
    default:
      return state
  }
}
