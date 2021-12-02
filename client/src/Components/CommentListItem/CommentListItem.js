import React from "react";

export default function CommentListItem({ user, comment }) {
  return (
    <article>
      <h2>{user}</h2>
      <p>{comment}</p>
    </article>
  );
}
