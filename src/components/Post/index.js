import React from "react";

import PropTypes from "prop-types";
import PostHeader from "./PostHeader";

export function Post(props) {
  return (
    <>
      <article>
        <PostHeader
          post={{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read,
          }}
          onRemove={props.onRemove}
        />

        <br />
        <small>{props.post.subtitle}</small>
        <br />
        <small>Likes: {props.post.likes / 2}</small>
        <br />
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};
