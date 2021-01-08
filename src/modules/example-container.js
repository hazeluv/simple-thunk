import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ExampleComponent from "./example-component";
import * as actions from "../store/actions";

const mapStateToProps = state => {
  return {
    exampleArray: state.example.exampleArray,
    someData: state.example.someData
  };
};

const mapDispatch = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatch
)(ExampleComponent);
