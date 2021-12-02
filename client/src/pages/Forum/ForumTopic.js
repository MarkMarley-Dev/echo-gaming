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

  postVideo = () => {
    console.log("this.state", this.state);
    axios
      .post(`${TOPICS_LIST_API}/${topicId}/comment`, {
        topictitle: this.state.topicTitle,
        topicComments: this.state.topicComments,
      })
      .then((response) => {
        console.log("You have sent the post request", response);
        toast.success("🎉 You Successfully uploaded your video 🎉 ", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.log("There was a problem with your post request", error);
      });
  };
  // ? .. Create Handler function .. ? \\

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  // ? .. Checks if form fields are filled .. ? \\

  isFormFilled = () => {
    if (this.state.title === "") {
      return false;
    }
  };

  // ? .. If form is good post data .. \\
  handleSubmit = (event) => {
    console.log("i clicked the button");
    event.preventDefault();

    if (this.isFormFilled()) {
      this.setState({ formValid: false });
      toast.error(
        " ⛔️ Please make sure all your input field are enterred correctly ⛔️",
        {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } else {
      this.setState({ formValid: true });
      this.postVideo();
    }
  };
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
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>username</p>
          </label>
          <textarea className="form__user-input" name="user"></textarea>
          <label>
            <p>Comment</p>
          </label>
          <textarea className="form__comment-input" name="comment"></textarea>
          <button className="form__btn" type="submit">
            Press Me!
          </button>
        </form>
      </div>
    );
  }
}
