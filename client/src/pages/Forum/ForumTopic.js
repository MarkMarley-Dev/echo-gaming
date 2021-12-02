import React, { Component } from "react";
import axios from "axios";
import { TOPICS_LIST_API } from "../../utils/api";
import CommentListItem from "../../Components/CommentListItem/CommentListItem";

export default class ForumTopic extends Component {
  state = {
    topicTitle: "",
    topicContents: "",
    topicComments: [],
  };

  componentDidMount() {
    let topicId = this.props.match.params.topicId;
    console.log(topicId);
    axios
      .get(`${TOPICS_LIST_API}/${topicId}`)
      .then((response) => {
        this.setState({
          topicTitle: response.data.title,
          topicContents: response.data.contents,
          topicComments: response.data.comments,
        });
      })
      .catch((err) =>
        console.log("Something went wrong while fetching the topic data: ", err)
      );
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <p> {this.state.topicTitle}</p>
        {this.state.topicComments.map((comment) => {
          return (
            <CommentListItem
              key={comment.id}
              comment={comment.comment}
              user={comment.user}
            />
          );
        })}
        <form>
          <label>
            {" "}
            <p>username</p>
          </label>
          <textarea></textarea>
          <label>
            {" "}
            <p>Comment</p>
          </label>
          <textarea></textarea>
        </form>
      </div>
    );
  }
}
