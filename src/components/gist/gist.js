import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGists } from "../../store/middlewares/thunk_gists";

export const Gist =() => {

 const {gists, gistsPending, gistsError} = useSelector((state) => state.gists)
 const dispatch = useDispatch()

 useEffect(() => {
     if(!gists) {
        dispatch(getGists())
     }   
}, [dispatch, gists])
    
    if (gistsPending) {
        return <div>pending...</div>
    }

    if (gistsError) {
        return <div>error...</div>
    }

    return (
        <div>
            <ul>
                {gists.map((gist, index) => <li key={index}>{gist.url}</li>)}
            </ul>
        </div>
    )
}