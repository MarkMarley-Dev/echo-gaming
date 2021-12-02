import React, { Component } from "react";
import axios from "axios";

export default class ForumTopic extends Component {
  state = {
    topicTitle: "",
    topicContents: "",
    topicComments: {},
  };

  componentDidMount() {
    let topicId = this.props.match.params.id;
    console.log(topicId);
    axios
      .get(`${TOPICS_LIST_API}/${topicId}`)
      .then((response) => {
        this.setState({
          topicTitle: response.data.title,
          topicContents: response.data.Contents,
          topicComments: response.data.Comments,
        });
      })
      .catch((err) =>
        console.log(
          "Something went wrong while fetching the warehouse inventory data: ",
          err
        )
      );
  }
  render() {
    return <div></div>;
  }
}
