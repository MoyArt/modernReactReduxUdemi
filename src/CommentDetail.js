import React from 'react';

const CommentDetail = props => {
  const {
    author,
    avatar,
    comment,
    commentTime
  } = props
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">{author}</a>
        <div className="metadata">
            <span className="date">Today at {commentTime}</span>
        </div>
        <div className="text">{comment}</div>
      </div>
    </div>
  )
}

export default CommentDetail;

