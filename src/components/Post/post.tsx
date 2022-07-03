import React, { useState } from "react";
import "../../commun/css/style.css";
import ButtonLike from "./buttonLike";

export type PostProps = {
  userName: string;
  imageUrl: string;
  content: string;
};

export const Post = ({ userName, imageUrl, content }: PostProps) => {
  return (
    <div className="post">
      <div className="titre">
        <img src={imageUrl} alt="" />
        <p>{userName}</p>
      </div>
      <p>{content}</p>
      <ButtonLike />
    </div>
  );
};
