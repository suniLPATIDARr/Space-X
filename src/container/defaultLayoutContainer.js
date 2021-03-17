import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";
import { getInfo } from "../action/action.getData";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getData: (report, dbname, offset, rowLimit, machineCode) => {
      dispatch(getInfo(report, dbname, offset, rowLimit, machineCode));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.info,
  };
};

const DefaultLayoutContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DefaultLayout)
);

export default DefaultLayoutContainer;
