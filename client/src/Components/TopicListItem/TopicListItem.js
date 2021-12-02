import React from "react";
import { Link } from "react-router-dom";
export default function Forum({ topicTitle, topicID }) {
  return (
    <Link to={`/topic/${topicID}`}>
      <article>
        <h2>{topicTitle}</h2>
      </article>
    </Link>
  );
}
