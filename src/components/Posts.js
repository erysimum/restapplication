import React from "react";
import { Postaction } from "../actions";
import { connect } from "react-redux";
import Users from "./Posts";

class Posts extends React.Component {
  componentDidMount() {
    this.props.Postaction();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user avatar image' />
          <div className='content'>
            <a className='header'>{post.title}</a>
            <div className='description'>{post.body}</div>
            <Users userId={post.userId} />
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className='ui list'> {this.renderList()}</div>;
  }
}
const mapStateToProps = (state) => {
  console.log(state.posts);
  return { posts: state.posts };
};

export default connect(mapStateToProps, { Postaction })(Posts);
