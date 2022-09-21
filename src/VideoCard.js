import React from "react";
import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar";

function VideoCard({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
  videoLink,
  channelLink,
}) {
  return (
    <div className="videoCard">
      <a href={videoLink} target="_blank">
        <img className="videoCard__thumbnail" src={image} alt="" />
      </a>
      <div className="videoCard__info">
        <a href={channelLink} target="_blank">
          <Avatar
            className="videoCard__avatar"
            alt={channel}
            src={channelImage}
          />
        </a>
        <div className="videoCard__text">
          <span className="video__textTag">
            <a href={videoLink} target="_blank">
              <h4 className="videoCard__videotitle">{title}</h4>
            </a>
          </span>
          <p>{channel}</p>
          <p>
            {views} · {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
