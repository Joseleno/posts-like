import React from "react";
import { Post, PostProps } from "./components/Post/post";

function App() {
  const listPost = new Array<PostProps>();
  listPost.push({
    userName: "User Name Boxer",
    imageUrl:
      "https://rastaland.com.br/wp-content/uploads/2021/04/canil-boxer-rastaland-filhtoes-2018-12.jpeg",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiore voluptatem fugiat suscipit laborum pariatur debitis nihil consequuntur voluptas, id totam nesciunt animi ullam hic alias commodi asperiores? Culpa, deleniti unde!",
  });
  listPost.push({
    userName: "User Name Terra Nova",
    imageUrl:
      "https://www.adoropets.com.br/wp-content/uploads/2018/04/terra-nova.jpg",
    content:
      "Terra Nova Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiore voluptatem fugiat suscipit laborum pariatur debitis nihil consequuntur voluptas, id totam nesciunt animi ullam hic alias commodi asperiores? Culpa, deleniti unde!",
  });
  listPost.push({
    userName: "User Name Husky",
    imageUrl:
      "https://www.clubeparacachorros.com.br/wp-content/uploads/2018/07/cores-do-husky-siberiano-marrom-no-mato.jpg",
    content:
      "Husk Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiore voluptatem fugiat suscipit laborum pariatur debitis nihil consequuntur voluptas, id totam nesciunt animi ullam hic alias commodi asperiores? Culpa, deleniti unde!",
  });
  return (
    <>
      {listPost.map((post, index) => (
        <Post
          key={index}
          userName={post.userName}
          imageUrl={post.imageUrl}
          content={post.content}
        />
      ))}
    </>
  );
}

export default App;
