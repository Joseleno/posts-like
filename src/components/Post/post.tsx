import React, { useState } from "react";
import "../../commun/css/style.css";
import ButtonLike from "./buttonLike";

export const Post = () => {
  return (
    <div className="post">
      <div className="titre">
        <img
          src="https://rastaland.com.br/wp-content/uploads/2021/04/canil-boxer-rastaland-filhtoes-2018-12.jpeg"
          alt=""
        />
        <p>UserName</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
        voluptatem fugiat suscipit laborum pariatur debitis nihil consequuntur
        voluptas, id totam nesciunt animi ullam hic alias commodi asperiores?
        Culpa, deleniti unde!
      </p>
      <ButtonLike />
    </div>
  );
};
