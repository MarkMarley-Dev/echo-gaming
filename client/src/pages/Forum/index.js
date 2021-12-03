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
        <header className="header">
          <div className="header__alarm"></div>
          <h1 className="header__title"> Community</h1>
          <div className="header__settings"></div>
        </header>
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
                <div className="find__user-perferred-games-ctn1">
                  <div className="find__user-pokemon"> </div>
                  <div className="find__user-uno"> </div>
                </div>
                <div className="find__user-perferred-games-ctn2">
                  <div className="find__user-callofduty"> </div>
                  <div className="find__user-genshin"> </div>
                </div>
              </div>
              <h3 className="find__user-message">Send a Message</h3>
            </div>
            // ! .. Player 2 .. ! \\
            <div className="find__players-ctn-one">
              <div className="find__user-jake"></div>
              <div className="find__user-name-ctn">
                <h3 className="find__user-name">Jake</h3>
                <p className="find__user-name-likes">Enjoys playing</p>
              </div>
              <div className="find__user-preferred-games">
                <div className="find__user-perferred-games-ctn1">
                  <div className="find__user-pokemon"> </div>
                  <div className="find__user-uno"> </div>
                </div>
                <div className="find__user-perferred-games-ctn2">
                  <div className="find__user-callofduty"> </div>
                  <div className="find__user-genshin"> </div>
                </div>
              </div>
              <h3 className="find__user-message">Send a Message</h3>
            </div>
            // ! ... player 3 ... ! \\
            <div className="find__players-ctn-one">
              <div className="find__user-jake"></div>
              <div className="find__user-name-ctn">
                <h3 className="find__user-name">Jake</h3>
                <p className="find__user-name-likes">Enjoys playing</p>
              </div>
              <div className="find__user-preferred-games">
                <div className="find__user-perferred-games-ctn1">
                  <div className="find__user-pokemon"> </div>
                  <div className="find__user-uno"> </div>
                </div>
                <div className="find__user-perferred-games-ctn2">
                  <div className="find__user-callofduty"> </div>
                  <div className="find__user-genshin"> </div>
                </div>
              </div>
              <h3 className="find__user-message">Send a Message</h3>
            </div>
            // ! .. Player 4 .. ! \\
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
              <h3 className="find__user-message">Send a Message</h3>
            </div>
            // ! .. Player 5 .. ! \\
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
              <h3 className="find__user-message">Send a Message</h3>
            </div>
          </div>
        </section>

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
