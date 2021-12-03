import React, { Component } from "react";
import axios from "axios";
import { TOPICS_LIST_API, COMMENTS_LIST_API } from "../../utils/api";
import CommentListItem from "../../Components/CommentListItem/CommentListItem";
import { ToastContainer, toast } from "react-toastify";
import "./forumTopic.scss";
export default class ForumTopic extends Component {
  state = {
    user: "",
    topicComments: [],
    topicContents: "",
    comment: "",
    topicId: "",
  };

  componentDidMount() {
    let topicId = this.props.match.params.topicId;
    this.setState({ topicId: topicId });

    console.log(topicId);
    this.getTopicDetails(topicId);
    this.getCommentsForTopic(topicId);
  }

  getTopicDetails = (topicId) => {
    axios
      .get(`${TOPICS_LIST_API}/${topicId}`)
      .then((response) => {
        this.setState({
          user: response.data.title,
          topicContents: response.data.contents,
        });
      })
      .catch((err) =>
        console.log("Something went wrong while fetching the topic data: ", err)
      );
  };

  getCommentsForTopic = (topicId) => {
    axios
      .get(`${COMMENTS_LIST_API}/${topicId}`)
      .then((response) => {
        this.setState({
          topicComments: response.data,
        });
      })
      .catch((err) =>
        console.log(
          "Something went wrong while fetching the comment data: ",
          err
        )
      );
  };
  postComment = () => {
    let topicId = this.props.match.params.topicId;
    console.log("this.state", this.state);
    axios
      .post(`${TOPICS_LIST_API}/${topicId}/comment`, {
        topicId: topicId,
        user: this.state.user,
        comment: this.state.comment,
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
      .then(() => this.getCommentsForTopic(this.state.topicId))
      .catch((error) => {
        console.log("There was a problem with your post request", error);
      });
  };
  // ? .. Create Handler function .. ? \\

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
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

    console.log(this.state.topicComments);
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

      this.postComment();
    }
  };
  render() {
    console.log(this.state.topicComments);
    return (
      <div>
        <header className="header">
          <div className="header__alarm"></div>
          <h1 className="header__title"> Community</h1>
          <div className="header__settings"></div>
        </header>
        {/* 
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
        <section className="hero">
          <div className="hero__img"></div>
          <div className="hero__text-ctn">
            <p className="hero__text">
              UNO is the classic card game of matching colours and numbers that
              is easy to pick up, and impossible to put down.
            </p>
          </div>
        </section>
        <section className="find__players-ctn">
          <h1 className="find__players-title">Find partners to play with </h1>
          <h3 className="find__players-subtitle">
            Team up with members from the community
          </h3>

          <div className="find__multi-players">
            // ! .. Player 1 .. ! \\
            <div className="find__players-ctn-one">
              <div className="find__user-emily"></div>
              <div className="find__user-name-ctn">
                <h3 className="find__user-name">Emily</h3>
                <p className="find__user-name-likes">Enjoys playing</p>
              </div>
              <div className="find__user-preferred-games">
                <div className="find__user-pokemon"> </div>
                <div className="find__user-uno"> </div>
                <div className="find__user-candy"> </div>
                <div className="find__user-genshin"> </div>
              </div>
              <h3>Send a Message</h3>
            </div>
            // ! .. Player 2 .. ! \\
            <div className="find__players-ctn-one">
              <div className="find__user-jake"></div>
              <div className="find__user-name-ctn">
                <h3 className="find__user-name">Jake</h3>
                <p className="find__user-name-likes">Enjoys playing</p>
              </div>
              <div className="find__user-preferred-games">
                <div className="find__user-pokemon"> </div>
                <div className="find__user-uno"> </div>
                <div className="find__user-candy"> </div>
                <div className="find__user-genshin"> </div>
              </div>
              <h3>Send a Message</h3>
            </div>
            // ! ... player 3 ... ! \\
            <div className="find__players-ctn-one">
              <div className="find__user-jake"></div>
              <div className="find__user-name-ctn">
                <h3 className="find__user-name">Emily</h3>
                <p className="find__user-name-likes">Enjoys playing</p>
              </div>
              <div className="find__user-preferred-games">
                <div className="find__user-pokemon"> </div>
                <div className="find__user-uno"> </div>
                <div className="find__user-candy"> </div>
                <div className="find__user-genshin"> </div>
              </div>
              <h3>Send a Message</h3>
            </div>
            <div className="find__players-ctn-one">
              <div className="find__user-one"></div>
              <div className="find__user-name-ctn">
                <h3 className="find__user-name">Emily</h3>
                <p className="find__user-name-likes">Enjoys playing</p>
              </div>
              <div className="find__user-preferred-games">
                <div className="find__user-pokemon"> </div>
                <div className="find__user-uno"> </div>
                <div className="find__user-candy"> </div>
                <div className="find__user-genshin"> </div>
              </div>
              <h3>Send a Message</h3>
            </div>
            <div className="find__players-ctn-one">
              <div className="find__user-one"></div>
              <div className="find__user-name-ctn">
                <h3 className="find__user-name">Emily</h3>
                <p className="find__user-name-likes">Enjoys playing</p>
              </div>
              <div className="find__user-preferred-games">
                <div className="find__user-pokemon"> </div>
                <div className="find__user-uno"> </div>
                <div className="find__user-candy"> </div>
                <div className="find__user-genshin"> </div>
              </div>
              <h3>Send a Message</h3>
            </div>
          </div>
        </section>

        {this.state.topicComments.map((comment) => {
          return (
            <CommentListItem
              key={comment.id}
              title={comment}
              comment={comment.comment}
              user={comment.user}
            />
          );
        })}
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>username</p>
          </label>
          <input
            type="text"
            className="form__user-input"
            name="user"
            onChange={this.handleChange}
          ></input>
          <label>
            <p>Comment</p>
          </label>
          <textarea
            className="form__comment-input"
            name="comment"
            onChange={this.handleChange}
          ></textarea>
          <button className="form__btn" type="submit">
            Press Me!
          </button>
        </form>
      </div>
    );
  }
}
