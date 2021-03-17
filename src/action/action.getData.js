export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_FAILURE = "AUTH_FAILURE";
export const AUTH_SUCCESS = "AUTH_SUCCESS";

export const ALLDATA_REQUEST = "ALLDATA_REQUEST";
export const ALLDATA_SUCCESS = "ALLDATA_SUCCESS";
export const ALLDATA_FAILURE = "ALLDATA_FAILURE";

//import { renew } from "./action.auth";

export function getRequest() {
  return {
    type: ALLDATA_REQUEST,
    matches: [],
    status: "requesting",
  };
}

export function getFailure(error) {
  return {
    type: ALLDATA_FAILURE,
    error,
    status: "error",
  };
}

export function getSuccess(matches) {
  console.log(matches);
  return {
    type: ALLDATA_SUCCESS,
    matches,
    status: "success",
  };
}

export function getInfo(param) {
  return async (dispatch, getState, { api }) => {
    dispatch(getRequest());
    let url = "https://api.spaceXdata.com/v3/launches?limit=100";
    if(param){
      url+=param
    }
    try {
      const result = await api.get(url);
      let resultJson = await result.json();
      if (result.status == 403) {
        dispatch(getFailure(resultJson.error));
      } else {
        if (resultJson.statusCode > 400) {
          dispatch(getFailure(resultJson.error));
          throw new Error(`[${result.status}] ${resultJson.error}`);
        }
        dispatch(getSuccess(resultJson));
      }
    } catch (e) {
      console.log("Canceld error", e.name);
      if (e.name === "TypeError") {
        console.log("User refresh the api call");
      } else {
        dispatch(getFailure(e.message));
      }
    }
  };
}
