import React from 'react';

const Post = ({ data }) => {
  return (
    <div className="media">
      <a className="media-left" href="#dummy">
        <img
          alt=""
          className="media-object img-rounded thumbnail"
          src={data.thumbnail}
        />
      </a>
      <div className="media-body">
        <h4 className="media-heading">{data.name}</h4>
        <p>{data.feeling}</p>
      </div>
      <div className="full-width-div">
        <img alt="" src={data.image} className="full-width-img" />
      </div>
    </div>
  );
};

export default Post;
