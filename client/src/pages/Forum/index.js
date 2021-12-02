import React, { Component } from "react";
import TopicListItem from "../../Components/TopicListItem/TopicListItem";
import { TOPICS_LIST_API } from "../../utils/api";
import axios from "axios";

export default class Forum extends Component {
  state = {
    topicsList: [],
  };

  componentDidMount() {
    console.log(TOPICS_LIST_API);
    axios
      .get(TOPICS_LIST_API)
      .then((response) => {
        this.setState({
          topicsList: response.data,
        });
      })
      .catch((err) =>
        console.log("Something went wrong while fetching the topic list: ", err)
      );
  }
  render() {
    let displayTopicsList = this.state.topicsList;
    return (
      <div>
        {displayTopicsList.map((topic) => {
          return (
            <TopicListItem
              key={topic.id}
              topicTitle={topic.title}
              topicID={topic.id}
            />
          );
        })}
      </div>
    );
  }
}
