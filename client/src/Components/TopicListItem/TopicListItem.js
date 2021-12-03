import React from "react";
import { Link } from "react-router-dom";
import "./topicListItem.scss";
export default function Forum({
  topicTitle,
  topicID,
  topicContents,
  topicGame,
  topicUser,
}) {
  return (
    <Link to={`/topic/${topicID}`}>
      <article className="topic__list-item-ctn">
        <h2 className="topic__title">{topicTitle}</h2>

        <div className="topic__info-ctn">
          <p className="topic__info"> Game: {topicGame}</p>
          <p className="topic__info"> From: {topicUser} </p>
        </div>
        <p className="topic__description">{topicContents}</p>
        <div className="topic__join-ctn">
          <div className="topic__join-icons-ctn">
            <div className="topic__icon1"></div>
            <div className="topic__icon2"></div>
            <div className="topic__icon3"></div>
            <div className="topic__icon4"></div>
          </div>
          <p className="topic__join-text"> Join the discussion </p>
        </div>
      </article>
    </Link>
  );
}
