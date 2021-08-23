import { gistsSuccess, gistsStart, gistsError} from "../gist";

const URL = "https://api.github.com/gists/public";

export const getGists = () => async (dispatch) => {
 try {
     dispatch(gistsStart())
    const response = await fetch(URL);
    const result = await response.json()
    dispatch(gistsSuccess(result))
 } catch (e) {
    dispatch(gistsError(e))
 }
}