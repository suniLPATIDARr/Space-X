import * as deviecInfoAction from "../action/action.getData";

const info = (
  state = {
    data: [],
    error: null,
    status: null,
  },
  action
) => {
  switch (action.type) {
    case deviecInfoAction.ALLDATA_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        report: action.matches,
      });
    case deviecInfoAction.ALLDATA_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        error: action.error,
      });
    case deviecInfoAction.ALLDATA_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        data: action.matches,
      });
    default:
      return state;
  }
};

export default info;
