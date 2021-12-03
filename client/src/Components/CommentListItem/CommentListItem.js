import React from "react";

export default function CommentListItem({ user, comment }) {
  return (
    <article>
      {/* <h2>{title}</h2> */}
      <h3>{user}</h3>
      <p>{comment}</p>
    </article>
  );
}
