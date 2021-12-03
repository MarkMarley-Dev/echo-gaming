import React from "react";

export default function CommentListItem({ user, comment }) {
  return (
    <article className="comments">
      <h3 className="comments__user">{user}:</h3>
      <p className="comments__description"> {comment}</p>
    </article>
  );
}
