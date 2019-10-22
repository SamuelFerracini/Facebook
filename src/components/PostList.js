import React, { Component } from "react";

import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Michel",
          avatar: "https://avatars2.githubusercontent.com/u/1825798?v=4"
        },
        date: "14 Ago 2019",
        content: "Pessoal, alguém poderia me ajudar com ExpressJs?",
        comments: [
          {
            id: 2,
            author: {
              name: "Yuriy Semchyshyn",
              avatar: "https://avatars3.githubusercontent.com/u/8031145?v=4"
            },
            date: "14 Ago 2019",
            content: "Claro, me passa seu discord para trocarmos mensagens"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Jon Snow",
          avatar: "https://avatars0.githubusercontent.com/u/1?v=4"
        },
        date: "14 Ago 2019",
        content:
          "Olá pessoas, tudo bem? Eu estou com planos de criar uma startup, alguém que goste de desafios tem vontade de participar ?",
        comments: [
          {
            id: 4,
            author: {
              name: "Bill Gates",
              avatar: "https://avatars0.githubusercontent.com/u/2?v=4"
            },
            date: "14 Ago 2019",
            content:
              "Também tenho em mente criar uma startup, deveríamos trocar contatos"
          },
          {
            id: 5,
            author: {
              name: "Augusto Cézar",
              avatar: "https://avatars0.githubusercontent.com/u/6?v=4"
            },
            date: "14 Ago 2019",
            content:
              "Que maaaaaassa! Eu adoraria participar também C:"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
