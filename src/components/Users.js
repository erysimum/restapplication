import React from "react";
import { connect } from "react-redux";
import { Useraction } from "../actions";

class Users extends React.Component {
  componentDidMount() {
    this.props.Useraction(this.props.userId);
  }

  render() {
    const user = this.props.userObj;
    if (!user) {
      return null;
    }
    return <div>{user.name}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return { userObj: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { Useraction })(Users);
